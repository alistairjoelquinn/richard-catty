import { isMobile, isTablet } from 'react-device-detect';
import PropTypes from 'prop-types';

const CardWrapper = ({ children, url }) => (isMobile || isTablet ? children : <a href={url}>{children}</a>);

CardWrapper.propTypes = {
    children: PropTypes.any,
    url: PropTypes.string,
};

export default CardWrapper;
