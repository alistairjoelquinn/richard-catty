import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const MenuStateContext = createContext();

const MenuStateProvider = ({ children, meta }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [pageMeta, setPageMeta] = useState('');

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);
    const openMenu = () => setMenuOpen(true);

    useEffect(() => {
        setPageMeta(meta);
    }, [meta]);

    return (
        <MenuStateContext.Provider value={{ menuOpen, setMenuOpen, toggleMenu, openMenu, closeMenu, pageMeta }}>
            {children}
        </MenuStateContext.Provider>
    );
};

MenuStateProvider.propTypes = {
    children: PropTypes.any,
    meta: PropTypes.object,
};

const useMenu = () => useContext(MenuStateContext);

export { MenuStateProvider, useMenu };
