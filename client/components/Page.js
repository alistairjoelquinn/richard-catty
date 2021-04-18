import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { Normalize } from 'styled-normalize';

import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

const Page = ({ children }) => {
    const fade = useSpring({
        from: { opacity: 0 },
        opacity: 1,
        config: {
            duration: 2000,
        },
    });

    return (
        <animated.div style={fade}>
            <Normalize />
            <GlobalStyles />
            <Typography />
            <Header />
            {children}
        </animated.div>
    );
};

Page.propTypes = {
    children: PropTypes.any,
};

export default Page;
