import Head from 'next/head';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { useQuery, gql } from '@apollo/client';

import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

const GET_META_QUERY = gql`
    query {
        allMeta {
            title
            description
        }
    }
`;

const Page = ({ children }) => {
    const { loading, error, data } = useQuery(GET_META_QUERY);

    if (loading) return null;
    if (error) return null;

    const meta = data.allMeta[0];

    return (
        <>
            <Head>
                <link rel="preload" href="/static/CutiveMono-Regular.ttf" as="font" crossOrigin="" />
                <link rel="preload" href="/static/MajorMonoDisplay-Regular.ttf" as="font" crossOrigin="" />
                <link rel="icon" href="/static/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                <meta name="title" content={meta.title} />
                <meta name="description" content={meta.description} />
                {typeof window === 'object' && <meta property="og:url" content={location?.href} />}
                <meta property="og:site_name" content={meta.title} key="ogsitename" />
                <meta property="og:description" content={meta.description} key="ogdesc" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="richard-catty.vercel.app" />
                {typeof window === 'object' && <meta property="twitter:url" content={location?.href} />}
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

Page.propTypes = {
    children: PropTypes.any,
};

export default Page;
