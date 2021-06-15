import styled from 'styled-components';

export const CardPageStyles = styled.div`
    position: fixed;
    overflow-y: scroll;
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
    @media screen and (max-width: 800px) {
        background-position: center center;
    }
`;

export const CardGridStyles = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
    gap: 3vw;
    background-color: transparent;
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
    .selected-text {
        position: absolute;
        top: ${p => (p.isMobile || p.isTablet ? '0' : p.projects ? '25vh' : 'auto')};
        right: ${p => (p.isMobile || p.isTablet ? '0' : 'auto')};
        left: ${p => (p.isMobile || p.isTablet ? '0' : p.portfolio ? '50vw' : '38vw')};
        bottom: ${p => (p.isMobile || p.isTablet ? '0' : 'auto')};
        display: flex;
        align-items: center;
        justify-content: center;
        margin: ${p => (p.isMobile || p.isTablet ? '0 10vw' : 'auto')};
        overflow: scroll;
        box-shadow: ${p => (p.isMobile ? 'none' : '0 4px 8px 0 rgba(0, 0, 0, 0.2)')};
        border-radius: 15px;
        & > div {
            max-width: ${p => (!p.isMobile || !p.isTablet ? '45vw' : 'auto')};
        }
    }
    @media screen and (max-width: 1300px) {
        height: auto;
        div.selected-text {
            left: ${p => (p.isMobile || p.isTablet ? '0' : '45vw')};
        }
    }
    @media screen and (max-width: 1200px) {
        height: auto;
        div.selected-text {
            left: ${p => (p.isMobile || p.isTablet ? '0' : '50vw')};
        }
    }
    @media screen and (max-width: 950px) {
        div.selected-text {
            left: ${p => (p.isMobile || p.isTablet ? '0' : '40vw')};
            top: ${p => (p.isMobile || p.isTablet ? '0' : p.projects ? '20vh' : '25vh')};
            div {
                max-width: ${p => (p.isMobile || p.isTablet ? '80vw' : '55vw')};
            }
        }
    }
    @media screen and (max-width: 500px) and (max-height: 700px) {
        div.selected-text {
            & > div {
                max-height: 70vh;
                overflow: scroll;
                padding-top: 10vh;
                position: relative;
                header {
                    position: absolute;
                    top: 1rem;
                }
            }
        }
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

export const CardLinkStyles = styled.div`
    width: 100%;
    padding-top: 1rem;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    justify-content: space-evenly;
    a {
        color: black;
        &:visited {
            color: black;
        }
    }
`;
