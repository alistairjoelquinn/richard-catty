import styled from 'styled-components';

import { useMenu } from '../components/contexts/MenuProvider';

const HeaderIconStyles = styled.div`
    .nav-icon {
        z-index: 120;
        width: 40px;
        height: 40px;
        position: relative;
        margin: 20px 25px 0px 30px;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.5s ease-in-out;
        -moz-transition: 0.5s ease-in-out;
        -o-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        -webkit-touch-callout: none;
        /* iOS Safari */
        -webkit-user-select: none;
        /* Safari */
        -khtml-user-select: none;
        /* Konqueror HTML */
        -moz-user-select: none;
        /* Old versions of Firefox */
        -ms-user-select: none;
        /* Internet Explorer/Edge */
        user-select: none;
        /* Non-prefixed version, currently
  supported by Chrome, Opera and Firefox */
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
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
    }
    .nav-icon span:nth-child(1) {
        top: 0px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }
    .nav-icon span:nth-child(2) {
        top: 18px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }
    .nav-icon.open span:nth-child(1) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        top: -2px;
        left: 6px;
    }
    .nav-icon.open span:nth-child(2) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
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
