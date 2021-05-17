import Head from 'next/head';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import meta from '../content/metadata.json';

const Page = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="preload" href="/static/CutiveMono-Regular.ttf" as="font" crossOrigin="" />
                <link rel="preload" href="/static/MajorMonoDisplay-Regular.ttf" as="font" crossOrigin="" />
                <link rel="icon" href="/static/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                <meta name="description" content={meta.description} />
                {location && <meta property="og:url" content={location.href} />}
                <meta property="og:image" content={meta.image || '/logo.svg'} />
                <meta property="og:site_name" content={meta.title} key="ogsitename" />
                <meta property="og:description" content={meta.description} key="ogdesc" />
            </Head>
            <Normalize />
            <GlobalStyles />
            <Typography />
            <div>
                <Header />
                {children}
            </div>
        </>
    );
};

Page.propTypes = {
    children: PropTypes.any,
};

export default Page;
