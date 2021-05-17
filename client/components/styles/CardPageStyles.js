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
    padding: 8vh 5vw;
    font-family: Cutive;
    font-size: ${p => {
        console.log('p: ', p);
        return p.testimonial ? '2.2rem' : p.fontSize;
    }};
    background-image: url(${p => p.image});
    background-position: center;
    background-size: cover;
    div > header {
        font-size: ${p => p.headerSize};
        font-weight: bold;
    }
    @media (max-width: 1200px) {
        font-size: ${p => (p.testimonial ? '2rem' : p.projects && '1.6rem')};
    }
    @media (max-width: 1100px) {
        font-size: ${p => p.testimonial && '1.8rem'};
    }
    @media (max-width: 800px) {
        font-size: ${p => (p.testimonial || p.projects) && '2.2rem'};
    }
    @media (max-width: 700px) {
        padding: 8vh 5vw;
        font-size: ${p => (p.testimonial || p.projects) && '2.2rem'};
    }
`;
