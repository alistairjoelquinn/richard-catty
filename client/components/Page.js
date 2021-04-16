import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

import Header from './Header';
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
        </div>
    );
};

Page.propTypes = {
    children: PropTypes.any,
};

export default Page;
