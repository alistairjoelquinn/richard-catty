import styled from 'styled-components';
import { Menu } from 'grommet-icons';
import { useMenu } from './contexts/MenuProvider';
import SideMenu from './SideMenu';
import HeaderIcon from './HeaderIcon';
import Link from 'next/link';

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
        svg {
            cursor: pointer;
        }
    }
`;

const Header = () => {
    const { toggleMenu } = useMenu();

    return (
        <HeaderStyles>
            <Link href="/">
                <h1>RicHARd cAtty</h1>
            </Link>
            <div onClick={toggleMenu}>
                <HeaderIcon />
            </div>
            <SideMenu />
        </HeaderStyles>
    );
};

export default Header;
