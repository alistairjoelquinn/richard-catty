import styled from 'styled-components';

import CardComponent from '../components/CardComponent';
import portfolios from '../content/portfolios.json';
import { CardPageStyles } from '../components/styles/CardPageStyles';

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
        bottom: 0;
        width: 100%;
        border: none;
        color: red;
        text-align: center;
        font-weight: bolder;
        padding: 20px;
        font-size: 20px;
        cursor: pointer;
        border-radius: 6px;
        z-index: 3;
    }
`;

const PortfolioPage = () => {
    return (
        <CardPageStyles
            image="https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619200424/IMG_8020_bhuyxi.jpg"
            fontSize="1.5rem"
            headerSize="2.3rem"
        >
            <PortfolioGridStyles>
                {portfolios.map(portfolio => (
                    <GridItemStyles key={portfolio.title}>
                        <CardComponent
                            item={portfolio}
                            showFooter={false}
                            gradient
                            headerPadding="small"
                            bodyPadding="small"
                        />
                        <span>Read More</span>
                    </GridItemStyles>
                ))}
            </PortfolioGridStyles>
        </CardPageStyles>
    );
};

export default PortfolioPage;
