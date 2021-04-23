import Head from 'next/head';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

const Page = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="preload" href="/static/CutiveMono-Regular.ttf" as="font" crossOrigin="" />
                <link rel="preload" href="/static/MajorMonoDisplay-Regular.ttf" as="font" crossOrigin="" />
            </Head>
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
