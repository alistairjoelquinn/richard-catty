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
    div {
        /* position: relative; */
        /* display: flex;
        align-items: center;
        justify-content: center; */
        /* width: 100%; */
        span {
            border: none;
            color: red;
            text-align: center;
            font-weight: bolder;
            padding: 20px;
            font-size: 20px;
            cursor: pointer;
            border-radius: 6px;
            z-index: 1;
        }
        /* div {
            position: absolute;
        } */
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
                        <CardComponent item={portfolio} showFooter={false} gradient headerPadding="small" />
                        <span>Read More</span>
                    </div>
                ))}
            </PortfolioGridStyles>
        </CardPageStyles>
    );
};

export default PortfolioPage;
