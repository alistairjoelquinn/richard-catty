import styled from 'styled-components';

const PortfolioPageStyles = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PortfolioPage = () => {
    return (
        <PortfolioPageStyles>
            <p>Portfolio Page</p>
        </PortfolioPageStyles>
    );
};

export default PortfolioPage;
