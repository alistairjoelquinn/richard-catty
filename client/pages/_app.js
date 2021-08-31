import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import { MenuStateProvider } from '../components/contexts/MenuProvider';

import Page from '../components/Page';

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
