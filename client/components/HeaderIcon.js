import styled from 'styled-components';

import { useMenu } from '../components/contexts/MenuProvider';

const HeaderIconStyles = styled.div`
    .nav-icon {
        z-index: 120;
        width: 40px;
        height: 40px;
        position: relative;
        margin: 20px 25px 0px 30px;
        transform: rotate(0deg);
        transition: 0.5s ease-in-out;
        cursor: pointer;
        user-select: none;
    }
    .nav-icon span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: black;
        border-radius: 3px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
    }
    .nav-icon span:nth-child(1) {
        top: 0px;
        transform-origin: left center;
    }
    .nav-icon span:nth-child(2) {
        top: 18px;
        transform-origin: left center;
    }
    .nav-icon.open span:nth-child(1) {
        transform: rotate(45deg);
        top: -2px;
        left: 6px;
    }
    .nav-icon.open span:nth-child(2) {
        transform: rotate(-45deg);
        top: 26px;
        left: 6px;
    }
`;

const HeaderIcon = () => {
    const { menuOpen } = useMenu();

    return (
        <HeaderIconStyles>
            <div className={menuOpen ? 'nav-icon open' : 'nav-icon'}>
                <span></span>
                <span></span>
            </div>
        </HeaderIconStyles>
    );
};

export default HeaderIcon;
