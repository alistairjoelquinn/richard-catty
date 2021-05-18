import styled from 'styled-components';
import { useSprings, animated } from 'react-spring';

import CardComponent from '../components/CardComponent';
import { CardPageStyles } from '../components/styles/CardPageStyles';
import portfolios from '../content/portfolios.json';
import springValues from '../lib/animations/portfolioSprings.json';
import SEO from '../components/SEO';

const PortfolioGridStyles = styled.div`
    padding-top: 7vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 36vh;
    gap: 3vw;
`;

const GridItemStyles = styled(animated.div)`
    position: relative;
    width: 40vw;
    & > div {
        position: absolute;
    }
    span {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 5%;
        border: 1px solid red;
        color: red;
        background-color: rgba(248, 248, 248, 1);
        text-align: center;
        font-weight: bolder;
        padding: 10px;
        font-size: 20px;
        cursor: pointer;
        border-radius: 6px;
        z-index: 3;
        margin: 0 auto;
    }
`;

const pageImage = 'https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619200424/IMG_8020_bhuyxi.jpg';

const PortfolioPage = () => {
    const springs = useSprings(
        springValues.length,
        springValues.map(item => ({
            from: {
                ...item[0],
            },
            to: {
                ...item[1],
            },
        }))
    );

    return (
        <>
            <SEO pageTitle="Richard Catty - Portfolio" pageImage={pageImage} />
            <CardPageStyles image={pageImage} fontSize="1.5rem" headerSize="2.3rem" title="Eucalyptus">
                <PortfolioGridStyles>
                    {springs.map((spring, idx) => (
                        <GridItemStyles key={portfolios[idx].title} style={spring}>
                            <CardComponent
                                item={portfolios[idx]}
                                showFooter={false}
                                gradient
                                portfolio
                                headerPadding="small"
                                bodyPadding="small"
                            />
                            <span>Read More</span>
                        </GridItemStyles>
                    ))}
                </PortfolioGridStyles>
            </CardPageStyles>
        </>
    );
};

export default PortfolioPage;
