import styled from 'styled-components';
import { useMenu } from './contexts/MenuProvider';

const SideMenuStyles = styled.div`
    padding: 20px;
    position: relative;
    background: white;
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
    width: 40%;
    min-width: 500px;
    bottom: 0;
    transform: translateX(100%);
    transition: all 0.3s;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    z-index: 100;
    ${p => p.open && `transform: translateX(0);`};
    span {
        font-size: 3rem;
        cursor: pointer;
    }
`;

const SideMenu = () => {
    const { menuOpen, closeMenu } = useMenu();

    return (
        <SideMenuStyles open={menuOpen}>
            <span onClick={closeMenu}>x</span>
        </SideMenuStyles>
    );
};

export default SideMenu;
