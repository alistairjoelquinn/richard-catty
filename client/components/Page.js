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
                {typeof window === 'object' && <meta property="og:url" content={location?.href} />}
                <meta property="og:site_name" content={meta.title} key="ogsitename" />
                <meta property="og:description" content={meta.description} key="ogdesc" />
                <meta name="twitter:card" content="summary_large_image" />
                {typeof window === 'object' && <meta property="twitter:domain" content="richard-catty.vercel.app" />}
                <meta property="twitter:url" content={location?.href} />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta
                    name="twitter:image"
                    content="https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619200431/IMG_8101-3_rpodzj.jpg"
                />
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
