import styled from 'styled-components';

const HeaderStyles = styled.header`
    position: absolute;
    width: 100vw;
    z-index: 10;
    display: flex;
    align-items: center;
    padding: 2rem;
    h1 {
        font-family: 'MajorMono';
        font-size: 4rem;
        letter-spacing: 0.4rem;
        padding-left: 3rem;
    }
`;

const Header = () => {
    return (
        <HeaderStyles>
            <h1>RicHARd cAtty</h1>
        </HeaderStyles>
    );
};

export default Header;
