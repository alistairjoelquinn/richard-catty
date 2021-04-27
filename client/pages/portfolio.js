import styled from 'styled-components';

import CardComponent from '../components/CardComponent';
import portfolios from '../content/portfolios.json';

const PortfolioGridStyles = styled.div`
    padding-top: 7vh;
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    grid-auto-rows: 36vh;
    gap: 3vw;
`;

const PortfolioPageStyles = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619200424/IMG_8020_bhuyxi.jpg');
    background-position: center;
    background-size: cover;
`;

const PortfolioPage = () => {
    return (
        <PortfolioPageStyles>
            <PortfolioGridStyles>
                {portfolios.map(portfolio => (
                    <CardComponent key={portfolio.title} item={portfolio} />
                ))}
            </PortfolioGridStyles>
        </PortfolioPageStyles>
    );
};

export default PortfolioPage;
