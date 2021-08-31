import Head from 'next/head';
import PropTypes from 'prop-types';

const SEO = ({ meta, pageImage }) => {
    return (
        <Head>
            <title>{meta.metaTitle}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="title" content={meta.metaTitle} />
            <meta name="description" content={meta.metaDescription} />
            <meta property="og:title" content={meta.metaTitle} key="ogtitle" />
            <meta property="og:image" content={pageImage} />
            <meta property="og:site_name" content={meta.metaTitle} key="ogsitename" />
            <meta property="og:description" content={meta.metaDescription} key="ogdesc" />
            {typeof window === 'object' && <meta property="og:url" content={location?.href} />}
            <meta name="twitter:title" content={meta.metaTitle} />
            <meta name="twitter:image" content={pageImage} />
            <meta name="twitter:description" content={meta.metaDescription} />
            <meta name="twitter:card" content="summary_large_image" />
            {typeof window === 'object' && <meta name="twitter:domain" content={location?.href} />}
            {typeof window === 'object' && <meta name="twitter:url" content={location?.href} />}
        </Head>
    );
};

SEO.propTypes = {
    meta: PropTypes.object,
    pageImage: PropTypes.string,
};

export default SEO;
