import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { Card, CardBody, CardHeader } from 'grommet';
import { isMobile, isTablet } from 'react-device-detect';

import CardItem from '../components/CardItem';
import CardWrapper from '../components/CardWrapper';
import testimonials from '../content/testimonials.json';
import { CardGridStyles, CardPageStyles, CardLinkStyles } from '../components/styles/CardPageStyles';
import SEO from '../components/SEO';
import { testimonialsPageImage } from '../content/mainPageImages.json';

const TestimonialsPage = () => {
    const [showText, setShowText] = useState(null);

    const displayItemTextHandler = item => setShowText(item);

    const transition = useTransition(showText, {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    });

    return (
        <>
            <SEO pageTitle="Richard Catty - Testimonials" pageImage={testimonialsPageImage} />
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
                                        style={{ ...animation, maxWidth: isMobile || isTablet ? '100%' : '40vw' }}
                                    >
                                        <Card background="light-1" pad="medium">
                                            <CardHeader style={{ paddingBottom: '1rem' }}>{showText.title}</CardHeader>
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
                                                    <a href={showText.url} target="_blank" rel="noreferrer noopener">
                                                        Read More
                                                    </a>
                                                    <div onTouchEnd={() => setShowText(null)}>Close</div>
                                                </CardLinkStyles>
                                            )}
                                        </Card>
                                    </animated.div>
                                )
                        )}
                </CardGridStyles>
            </CardPageStyles>
        </>
    );
};

export default TestimonialsPage;
