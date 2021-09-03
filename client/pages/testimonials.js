import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { Card, CardBody, CardHeader } from 'grommet';
import { isMobile, isTablet } from 'react-device-detect';
import { gql } from '@apollo/client';
import PropTypes from 'prop-types';

import CardItem from '../components/CardItem';
import CardWrapper from '../components/CardWrapper';
import { CardGridStyles, CardPageStyles, CardLinkStyles } from '../components/styles/CardPageStyles';
import SEO from '../components/SEO';
import { testimonialsPageImage } from '../content/mainPageImages.json';
import { client } from './_app';

const GET_TESTIMONIALS_QUERY = gql`
    query {
        allTestimonial {
            title
            content
            url
            squareImage
            who
            imageUrl
        }
        Meta(id: "7ffdab14-f9f5-47f2-926e-fa6c751007de") {
            metaTitle
            metaDescription
        }
    }
`;

const TestimonialsPage = ({ testimonials, metadata }) => {
    const [showText, setShowText] = useState(null);

    const displayItemTextHandler = item => setShowText(item);

    const transition = useTransition(showText, {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    });

    return (
        <>
            <SEO meta={metadata} pageImage={testimonialsPageImage} />
            <CardPageStyles image={testimonialsPageImage} fontSize="2.2rem" headerSize="2.7rem">
                <CardGridStyles testimonial isMobile={isMobile} isTablet={isTablet}>
                    {testimonials.map((testimonial, idx) => (
                        <CardWrapper key={idx} url={testimonial.url}>
                            <CardItem item={testimonial} displayItemTextHandler={displayItemTextHandler} />
                        </CardWrapper>
                    ))}
                    {showText &&
                        transition(
                            (animation, item) =>
                                item && (
                                    <animated.div
                                        className="selected-text"
                                        style={{
                                            ...animation,
                                            zIndex: 11,
                                        }}
                                    >
                                        <Card background="light-1" pad="medium">
                                            <CardHeader style={{ paddingBottom: '1rem' }}>{showText.title}</CardHeader>
                                            <div>
                                                <CardBody
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {showText.content}
                                                    <div
                                                        style={{
                                                            fontWeight: 'bold',
                                                            fontSize: '1.5rem',
                                                            width: '100%',
                                                            textAlign: 'end',
                                                            paddingTop: '1rem',
                                                        }}
                                                    >
                                                        {showText.who}
                                                    </div>
                                                </CardBody>
                                                {(isMobile || isTablet) && (
                                                    <CardLinkStyles>
                                                        <a
                                                            href={showText.url}
                                                            target="_blank"
                                                            rel="noreferrer noopener"
                                                        >
                                                            Read More
                                                        </a>
                                                        <div onTouchEnd={() => setShowText(null)}>Close</div>
                                                    </CardLinkStyles>
                                                )}
                                            </div>
                                        </Card>
                                    </animated.div>
                                )
                        )}
                </CardGridStyles>
            </CardPageStyles>
        </>
    );
};

export async function getServerSideProps() {
    const { data } = await client.query({
        query: GET_TESTIMONIALS_QUERY,
    });

    return {
        props: {
            testimonials: data.allTestimonial,
            metadata: data.Meta,
        },
    };
}

TestimonialsPage.propTypes = {
    testimonials: PropTypes.array,
    metadata: PropTypes.object,
};

export default TestimonialsPage;
