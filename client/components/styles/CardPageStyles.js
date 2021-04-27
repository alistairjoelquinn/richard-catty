import styled from 'styled-components';

export const CardPageStyles = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    padding: 0 5vw;
    font-family: Cutive;
    font-size: ${p => p.fontSize};
    background-image: url(${p => p.image});
    background-position: center;
    background-size: cover;
    div > header {
        font-size: ${p => p.headerSize};
        font-weight: bold;
    }
`;
