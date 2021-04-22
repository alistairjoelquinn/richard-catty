import styled from 'styled-components';
import { useMenu } from './contexts/MenuProvider';
import Link from 'next/link';

const SideMenuStyles = styled.div`
    font-family: Cutive;
    padding: 9rem 20px 6rem 20px;
    background: white;
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
    width: 40%;
    min-width: 500px;
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
        &:hover {
            background-color: lightgrey;
            color: white;
        }
    }
`;

const SideMenu = () => {
    const { menuOpen } = useMenu();

    return (
        <SideMenuStyles open={menuOpen}>
            <Link href="/projects">
                <div className="menu-item">
                    <span>Projects</span>
                </div>
            </Link>
            <Link href="portfolio" className="menu-item">
                <div className="menu-item">
                    <span>Portfolio</span>
                </div>
            </Link>
            <Link href="services" className="menu-item">
                <div className="menu-item">
                    <span>Services</span>
                </div>
            </Link>
            <Link href="testimonials" className="menu-item">
                <div className="menu-item">
                    <span>Testimonials</span>
                </div>
            </Link>
            <Link href="contact" className="menu-item">
                <div className="menu-item">
                    <span>Contact</span>
                </div>
            </Link>
        </SideMenuStyles>
    );
};

export default SideMenu;
