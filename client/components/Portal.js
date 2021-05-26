import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, parent }) => {
    const el = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        const target = parent && parent.appendChild ? parent : document.body;
        target.appendChild(el);

        return () => target.removeChild(el);
    }, [el, parent]);

    return createPortal(children, el);
};

export default Portal;
