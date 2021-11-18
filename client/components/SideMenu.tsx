import styled from 'styled-components';
import Link from 'next/link';
import { useMenu } from './contexts/MenuProvider';

interface SideMenuProps {
    open: boolean;
}

const SideMenuStyles = styled.div<SideMenuProps>`
    font-family: Cutive;
    padding: 10rem 20px 5rem 20px;
    background: #f5f5f5;
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
    width: 500px;
    max-width: 100vw;
    bottom: 0;
    transform: translateX(${(p) => (p.open ? '0' : '100%')});
    transition: transform 0.5s;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    span {
        font-size: 3rem;
    }
    .menu-item {
        cursor: pointer;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
            background-color: rgba(217, 163, 143, 0.2);
        }
    }
`;

const SideMenu = () => {
    const { menuOpen, closeMenu } = useMenu();

    return (
        <SideMenuStyles open={menuOpen}>
            <Link passHref href="/">
                <div className="menu-item" onClick={closeMenu}>
                    <span>Home</span>
                </div>
            </Link>
            <Link passHref href="/services">
                <div className="menu-item" onClick={closeMenu}>
                    <span>Services</span>
                </div>
            </Link>
            <Link passHref href="/projects">
                <div className="menu-item" onClick={closeMenu}>
                    <span>Projects</span>
                </div>
            </Link>
            <Link passHref href="/portfolio">
                <div className="menu-item" onClick={closeMenu}>
                    <span>Portfolio</span>
                </div>
            </Link>
            <Link passHref href="/testimonials">
                <div className="menu-item" onClick={closeMenu}>
                    <span>Testimonials</span>
                </div>
            </Link>
        </SideMenuStyles>
    );
};

export default SideMenu;
