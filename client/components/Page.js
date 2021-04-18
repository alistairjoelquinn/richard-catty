import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

import Header from './Header';
import Footer from './Footer';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

const Page = ({ children }) => {
    return (
        <div>
            <Normalize />
            <GlobalStyles />
            <Typography />
            <Header />
            {children}
            <Footer />
        </div>
    );
};

Page.propTypes = {
    children: PropTypes.any,
};

export default Page;
