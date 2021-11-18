import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { Card, CardBody, CardHeader } from 'grommet';
import { isMobile, isTablet } from 'react-device-detect';
import { gql } from '@apollo/client';

import CardItem from '../components/CardItem';
import CardWrapper from '../components/CardWrapper';
import SEO from '../components/SEO';
import { portfolioPageImage } from '../content/mainPageImages.json';
import { CardGridStyles, CardPageStyles, CardLinkStyles } from '../components/styles/CardPageStyles';
import { client } from './_app';

const GET_PORTFOLIOS_QUERY = gql`
    query {
        allPortfolio {
            title
            publisher
            content
            url
            imageUrl
            squareImage
        }
        Meta(id: "d48a00bf-da19-4492-9d92-fc12540fc0ea") {
            metaTitle
            metaDescription
        }
    }
`;

const PortfolioPage = ({ portfolios, metadata }) => {
    const [showText, setShowText] = useState(null);

    const displayItemTextHandler = (item) => setShowText(item);

    const transition = useTransition(showText, {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    });

    return (
        <>
            <SEO meta={metadata} pageImage={portfolioPageImage} />
            <CardPageStyles image={portfolioPageImage} fontSize="1.5rem" headerSize="2.3rem">
                <CardGridStyles portfolio isMobile={isMobile} isTablet={isTablet}>
                    {portfolios.map((portfolio, idx) => (
                        <CardWrapper key={idx} url={portfolio.url}>
                            <CardItem item={portfolio} displayItemTextHandler={displayItemTextHandler} />
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
                                ),
                        )}
                </CardGridStyles>
            </CardPageStyles>
        </>
    );
};

export async function getStaticProps() {
    const { data } = await client.query({
        query: GET_PORTFOLIOS_QUERY,
    });

    return {
        props: {
            portfolios: data.allPortfolio,
            metadata: data.Meta,
        },
    };
}

export default PortfolioPage;
