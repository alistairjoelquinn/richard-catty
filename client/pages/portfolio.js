import styled from 'styled-components';

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
    return <PortfolioPageStyles></PortfolioPageStyles>;
};

export default PortfolioPage;
