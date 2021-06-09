import styled from 'styled-components';

export const CardPageStyles = styled.div`
    position: fixed;
    overflow-x: scroll;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5vw;
    padding: 8vh 5vw;
    font-family: Cutive;
    font-size: ${p => (p.testimonial ? '2.2rem' : p.fontSize)};
    background-image: url(${p => p.image});
    background-position: left center;
    background-size: cover;
    div > header {
        font-size: ${p => p.headerSize};
        font-weight: bold;
    }
`;

// export const CardGridStyles = styled.div`
//     display: grid;
//     justify-content: center;
//     align-items: center;
//     grid-template-columns: 1fr 1fr;
//     gap: 3vw;
//     div {
//         a {
//             text-decoration: none;
//         }
//     }
//     div:nth-child(1) {
//         grid-area: 1 / 1 / 2 / 2;
//     }
//     div:nth-child(2) {
//         grid-area: 2 / 1 / 3 / 2;
//     }
//     div:nth-child(3) {
//         grid-area: 3 / 1 / 4 / 2;
//     }
//     div:nth-child(4) {
//         grid-area: 4 / 1 / 5 / 2;
//     }
//     div.selected-text {
//         position: absolute;
//         left: ${p => (p.testimonial ? '38vw' : '50vw')};
//     }
// `;

export const CardGridStyles = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
    gap: 3vw;
    div {
        a {
            text-decoration: none;
        }
    }
    div:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
    }
    div:nth-child(2) {
        grid-area: 2 / 1 / 3 / 2;
    }
    div:nth-child(3) {
        grid-area: 3 / 1 / 4 / 2;
    }
    div.selected-text {
        position: absolute;
        left: ${p => (p.portfolio ? '50vw' : '38vw')};
    }
`;

export const CardItemStyles = styled.div`
    width: 100%;
    display: ${p => (p.responsibilities ? 'auto' : 'flex')};
    align-items: flex-start;
    padding-top: 1rem;
    h3 {
        vertical-align: bottom;
    }
    h3:first-child {
        font-weight: bold;
        margin-right: 1rem;
    }
`;
