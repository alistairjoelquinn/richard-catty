import { isMobile, isTablet } from 'react-device-detect';

interface CardWrapperProps {
    url: string;
    children: React.ReactElement;
}

const CardWrapper = ({ children, url }: CardWrapperProps) =>
    isMobile || isTablet ? (
        children
    ) : (
        <a href={url} style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer noopener">
            {children}
        </a>
    );

export default CardWrapper;
