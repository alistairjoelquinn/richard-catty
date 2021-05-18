import styled from 'styled-components';

import CardComponent from '../components/CardComponent';
import { CardPageStyles } from '../components/styles/CardPageStyles';
import portfolios from '../content/portfolios.json';
import SEO from '../components/SEO';
import { portfolioPageImage } from '../content/mainPageImages.json';

const PortfolioGridStyles = styled.div`
    padding-top: 7vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 36vh;
    gap: 3vw;
`;

const GridItemStyles = styled.div`
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

const PortfolioPage = () => {
    return (
        <>
            <SEO pageTitle="Richard Catty - Portfolio" pageImage={portfolioPageImage} />
            <CardPageStyles image={portfolioPageImage} fontSize="1.5rem" headerSize="2.3rem" title="Eucalyptus">
                <PortfolioGridStyles>
                    {portfolios.map((portfolio, idx) => (
                        <GridItemStyles key={idx}>
                            <CardComponent
                                item={portfolio}
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
