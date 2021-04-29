import styled from 'styled-components';

export const CardPageStyles = styled.div`
    position: fixed;
    overflow-x: scroll;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 5vw;
    padding: 6vw 5vw;
    font-family: Cutive;
    font-size: ${p => p.fontSize};
    background-image: url(${p => p.image});
    background-position: center;
    background-size: cover;
    div > header {
        font-size: ${p => p.headerSize};
        font-weight: bold;
    }
    @media (max-width: 700px) {
        padding: 8vh 5vw;
    }
`;
