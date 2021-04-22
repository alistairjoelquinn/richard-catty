import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

const Page = ({ children }) => {
    return (
        <>
            <Normalize />
            <GlobalStyles />
            <Typography />
            <Header />
            {children}
        </>
    );
};

Page.propTypes = {
    children: PropTypes.any,
};

export default Page;
