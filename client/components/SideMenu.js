import styled from 'styled-components';
import { useMenu } from './contexts/MenuProvider';
import Link from 'next/link';

const SideMenuStyles = styled.div`
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
    transform: translateX(${p => (p.open ? '0' : '100%')});
    transition: transform 0.5s;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    span {
        font-size: 3rem;
        cursor: pointer;
    }
    .menu-item {
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
            <Link href="/services" className="menu-item">
                <div className="menu-item">
                    <span onClick={closeMenu}>Services</span>
                </div>
            </Link>
            <Link href="/projects">
                <div className="menu-item">
                    <span onClick={closeMenu}>Projects</span>
                </div>
            </Link>
            <Link href="/portfolio" className="menu-item">
                <div className="menu-item">
                    <span onClick={closeMenu}>Portfolio</span>
                </div>
            </Link>
            <Link href="/testimonials" className="menu-item">
                <div className="menu-item">
                    <span onClick={closeMenu}>Testimonials</span>
                </div>
            </Link>
            <Link href="/" className="menu-item">
                <div className="menu-item">
                    <span onClick={closeMenu}>Home</span>
                </div>
            </Link>
        </SideMenuStyles>
    );
};

export default SideMenu;
