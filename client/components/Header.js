import styled from 'styled-components';
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
    div.headerText {
        display: flex;
        flex-direction: column;
        h2 {
            font-family: CutiveMono;
            /* font-weight: bold; */
            font-size: 3.5rem;
            padding-left: 0.3rem;
        }
    }
    h1 {
        font-family: 'MajorMono';
        font-size: 5rem;
        letter-spacing: 0.4rem;
        cursor: pointer;
    }
    div.icon {
        height: 100%;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            cursor: pointer;
        }
    }
    @media (max-width: 1100px) {
        h1 {
            font-size: 4rem;
        }
    }
    @media (max-width: 950px) {
        h1 {
            font-size: 3rem;
        }
    }
`;

const Header = () => {
    const { toggleMenu, closeMenu, menuOpen } = useMenu();

    const headerClickHandler = () => {
        if (menuOpen) {
            closeMenu();
        }
    };

    return (
        <HeaderStyles>
            <div className="headerText">
                <Link href="/">
                    <h1 onClick={headerClickHandler}>RicHARd cAtty - WRiteR</h1>
                </Link>
            </div>
            <div className="icon" onClick={toggleMenu}>
                <HeaderIcon />
            </div>
            <SideMenu />
        </HeaderStyles>
    );
};

export default Header;
