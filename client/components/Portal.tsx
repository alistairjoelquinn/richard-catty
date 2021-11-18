import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC = ({ children }) => {
    const el = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        document.body.appendChild(el);

        return () => {
            document.body.removeChild(el);
        };
    }, [el]);

    return createPortal(children, el);
};

export default Portal;
