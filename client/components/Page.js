import Head from 'next/head';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { gql } from '@apollo/client';

import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import { client } from '../pages/_app';

const GET_META_QUERY = gql`
    query {
        allMeta {
            title
            description
        }
    }
`;

const Page = ({ children, meta }) => {
    return (
        <>
            <Head>
                <link rel="preload" href="/static/CutiveMono-Regular.ttf" as="font" crossOrigin="" />
                <link rel="preload" href="/static/MajorMonoDisplay-Regular.ttf" as="font" crossOrigin="" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="title" content={meta.title} />
                <meta name="description" content={meta.description} />
                {typeof window === 'object' && <meta property="og:url" content={location?.href} />}
                <meta property="og:site_name" content={meta.title} key="ogsitename" />
                <meta property="og:description" content={meta.description} key="ogdesc" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:domain" content="https://www.richardcatty.com" />
                {typeof window === 'object' && <meta name="twitter:url" content={location?.href} />}
                <meta name="twitter:description" content={meta.description} />
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

export async function getStaticProps() {
    const { data } = await client.query({
        query: GET_META_QUERY,
    });

    return {
        props: {
            meta: data.allMeta[0],
        },
    };
}

Page.propTypes = {
    children: PropTypes.any,
    meta: PropTypes.object,
};

export default Page;
