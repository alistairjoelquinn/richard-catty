import styled from 'styled-components';
import { useState } from 'react';
import { animated, useTransition } from 'react-spring';

import PortfolioItem from '../components/PortfolioItem';
import portfolios from '../content/portfolios.json';
import SEO from '../components/SEO';
import { portfolioPageImage } from '../content/mainPageImages.json';
import { Card, CardBody, CardHeader } from 'grommet';

const PortfolioPageStyles = styled.div`
    position: fixed;
    overflow-x: scroll;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    padding: 8vh 5vw;
    font-family: Cutive;
    font-size: ${p => (p.testimonial ? '2.2rem' : p.fontSize)};
    background-image: url(${p => p.image});
    background-position: left center;
    background-size: cover;
    div > header {
        font-size: ${p => p.headerSize};
        font-weight: bold;
    }
`;

const PortfolioGridStyles = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 3vw;
    div {
        height: 100%;
        a {
            text-decoration: none;
        }
    }
    div:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
    }
    div:nth-child(2) {
        grid-area: 2 / 1 / 3 / 2;
    }
    div:nth-child(3) {
        grid-area: 3 / 1 / 4 / 2;
    }
    div:nth-child(4) {
        grid-area: 4 / 1 / 5 / 2;
    }
    div.selected-text {
        position: absolute;
        left: 50vw;
        height: 50vh;
        background-color: transparent;
    }
`;

const PortfolioPage = () => {
    const [showText, setShowText] = useState(null);

    const displayItemTextHandler = item => setShowText(item);

    const transition = useTransition(showText, {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    });

    return (
        <>
            <SEO pageTitle="Richard Catty - Portfolio" pageImage={portfolioPageImage} />
            <PortfolioPageStyles image={portfolioPageImage} fontSize="1.5rem" headerSize="2.3rem">
                <PortfolioGridStyles>
                    {portfolios.map((portfolio, idx) => (
                        <PortfolioItem key={idx} item={portfolio} displayItemTextHandler={displayItemTextHandler} />
                    ))}
                    {showText &&
                        transition(
                            (animation, item) =>
                                item && (
                                    <animated.div className="selected-text" style={{ ...animation, maxWidth: '35vw' }}>
                                        <Card background="light-1" pad="medium">
                                            <CardHeader pad="small">{showText.title}</CardHeader>
                                            <CardBody
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {showText.content}
                                            </CardBody>
                                        </Card>
                                    </animated.div>
                                )
                        )}
                </PortfolioGridStyles>
            </PortfolioPageStyles>
        </>
    );
};

export default PortfolioPage;
