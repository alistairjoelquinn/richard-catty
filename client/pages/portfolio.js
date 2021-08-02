import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { Card, CardBody, CardHeader } from 'grommet';
import { isMobile, isTablet } from 'react-device-detect';
import { useQuery, gql } from '@apollo/client';

import CardItem from '../components/CardItem';
import CardWrapper from '../components/CardWrapper';
import SEO from '../components/SEO';
import { portfolioPageImage } from '../content/mainPageImages.json';
import { CardGridStyles, CardPageStyles, CardLinkStyles } from '../components/styles/CardPageStyles';

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
    }
`;

const PortfolioPage = () => {
    const { loading, error, data } = useQuery(GET_PORTFOLIOS_QUERY);
    const [showText, setShowText] = useState(null);

    const displayItemTextHandler = item => setShowText(item);

    const transition = useTransition(showText, {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    });

    if (loading) return null;
    if (error) return null;

    const portfolios = data.allPortfolio;

    return (
        <>
            <SEO pageTitle="Richard Catty - Portfolio" pageImage={portfolioPageImage} />
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
                                )
                        )}
                </CardGridStyles>
            </CardPageStyles>
        </>
    );
};

export default PortfolioPage;
