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
        h4 {
            transform: translateX(-3px);
        }
    }
    .sub-heading {
        font-family: Cutive;
        font-weight: bold;
        font-size: 2rem;
    }
    h4 {
        font-family: 'MajorMono';
        font-size: 5rem;
        letter-spacing: 0.4rem;
        cursor: pointer;
        margin: 0;
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
        h4 {
            font-size: 4rem;
        }
    }
    @media (max-width: 950px) {
        h4 {
            font-size: 3rem;
        }
    }
    @media (max-width: 700px) {
        .sub-heading {
            display: none;
        }
    }
    @media (max-width: 550px) {
        h4 {
            font-size: 2rem;
        }
        padding: 1rem 3rem;
    }
    @media (max-width: 376px) {
        h4 {
            font-size: 1.7rem;
        }
    }
    @media screen and (orientation: landscape) and (max-width: 800px) {
        padding-bottom: 2rem;
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
            <Link href="/">
                <div className="headerText" onClick={headerClickHandler}>
                    <h4>RicHARd cAtty</h4>
                    <div className="sub-heading">Eco-conscious Writer | Berlin</div>
                </div>
            </Link>
            <div className="icon" onClick={toggleMenu}>
                <HeaderIcon />
            </div>
            <SideMenu />
        </HeaderStyles>
    );
};

export default Header;
