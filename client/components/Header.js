import styled from 'styled-components';

const HeaderStyles = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    padding: 2rem;
    h1 {
        font-family: 'MajorMono';
        letter-spacing: 0.4rem;
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
