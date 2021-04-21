import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MenuStateContext = createContext();

const MenuStateProvider = ({ children }) => {
    console.log('hi');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);
    const openMenu = () => setMenuOpen(true);

    return (
        <MenuStateContext.Provider value={{ menuOpen, setMenuOpen, toggleMenu, openMenu, closeMenu }}>
            {children}
        </MenuStateContext.Provider>
    );
};

MenuStateProvider.propTypes = {
    children: PropTypes.any,
};

const useMenu = () => useContext(MenuStateContext);

export { MenuStateProvider, useMenu };
