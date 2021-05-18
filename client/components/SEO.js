import Head from 'next/head';
import PropTypes from 'prop-types';

const SEO = ({ pageTitle, pageImage }) => {
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta property="og:title" content={pageTitle} key="ogtitle" />
            <meta name="twitter:title" content={pageTitle} />
            <meta property="og:image" content={pageImage} />
            <meta name="twitter:image" content={pageImage} />
        </Head>
    );
};

SEO.propTypes = {
    pageTitle: PropTypes.string,
    pageImage: PropTypes.string,
};

export default SEO;
