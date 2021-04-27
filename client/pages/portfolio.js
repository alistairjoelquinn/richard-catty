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
    div > span {
        position: absolute;
        border: none;
        color: red;
        font-weight: bolder;
        padding: 20px;
        font-size: 20px;
        cursor: pointer;
        border-radius: 6px;
        width: 140px;
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
                    <div key={portfolio.title}>
                        <span>Read More</span>
                        <CardComponent item={portfolio} showFooter={false} gradient headerPadding="small" />
                    </div>
                ))}
            </PortfolioGridStyles>
        </CardPageStyles>
    );
};

export default PortfolioPage;
