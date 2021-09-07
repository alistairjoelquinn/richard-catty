import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import { MenuStateProvider } from '../components/contexts/MenuProvider';

import Page from '../components/Page';
import Head from 'next/head';

export const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_SANITY_URL,
    cache: new InMemoryCache(),
});

const App = props => {
    const transitionItems = [
        {
            id: props.router.route,
            Component: props.Component,
            pageProps: props.pageProps,
        },
    ];

    const transition = useTransition(transitionItems, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        keys: item => item.id,
    });

    return (
        <>
            <Head>
                <title>Richard Catty | Eco-conscious Copy & Content Writer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="title" content="Richard Catty | Eco-conscious Copy & Content Writer" />
                <meta
                    name="description"
                    content="Berlin-based, freelance writer of copy, content and articles with a focus on the environment, conservation and sustainability."
                />
                <meta property="og:title" content="Richard Catty | Eco-conscious Copy & Content Writer" key="ogtitle" />
                <meta
                    property="og:site_name"
                    content="Berlin-based, freelance writer of copy, content and articles with a focus on the environment, conservation and sustainability."
                    key="ogsitename"
                />
                <meta
                    property="og:description"
                    content="Berlin-based, freelance writer of copy, content and articles with a focus on the environment, conservation and sustainability."
                    key="ogdesc"
                />
                {typeof window === 'object' && <meta property="og:url" content="https://www.richardcatty.com/" />}
                <meta name="twitter:title" content="Richard Catty | Eco-conscious Copy & Content Writer" />
                <meta
                    name="twitter:description"
                    content="Berlin-based, freelance writer of copy, content and articles with a focus on the environment, conservation and sustainability."
                />
                <meta name="twitter:card" content="summary_large_image" />
                {typeof window === 'object' && <meta name="twitter:domain" content="https://www.richardcatty.com/" />}
                {typeof window === 'object' && <meta name="twitter:url" content="https://www.richardcatty.com/" />}
            </Head>
            <ApolloProvider client={client}>
                <MenuStateProvider>
                    <Page>
                        {transition((styles, { Component, pageProps }) => (
                            <animated.div style={styles}>
                                <Component {...pageProps} />
                            </animated.div>
                        ))}
                    </Page>
                </MenuStateProvider>
            </ApolloProvider>
        </>
    );
};

App.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
};

App.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any,
    router: PropTypes.object,
};

export default App;
