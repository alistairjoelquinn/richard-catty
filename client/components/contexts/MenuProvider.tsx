import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface ContextInitial {
    menuOpen?: boolean;
    setMenuOpen?: Dispatch<SetStateAction<boolean>>;
    toggleMenu?: () => void;
    openMenu?: () => void;
    closeMenu?: () => void;
}

const MenuStateContext = createContext<ContextInitial>({});

const MenuStateProvider = ({ children }) => {
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

const useMenu = () => useContext(MenuStateContext);

export { MenuStateProvider, useMenu };
