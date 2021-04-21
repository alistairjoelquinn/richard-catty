import styled from 'styled-components';
import { Menu } from 'grommet-icons';
import { useMenu } from './contexts/MenuProvider';

const HeaderStyles = styled.header`
    position: absolute;
    width: 100vw;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5rem;
    h1 {
        font-family: 'MajorMono';
        font-size: 5rem;
        letter-spacing: 0.4rem;
    }
    div {
        height: 100%;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Header = () => {
    const { openMenu } = useMenu();

    return (
        <HeaderStyles>
            <h1>RicHARd cAtty</h1>
            <div onClick={openMenu}>
                <Menu />
            </div>
        </HeaderStyles>
    );
};

export default Header;
