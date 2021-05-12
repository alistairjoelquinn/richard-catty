import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';

import { MenuStateProvider } from '../components/contexts/MenuProvider';

import Page from '../components/Page';

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
        <MenuStateProvider>
            <Page>
                {transition((styles, { Component, pageProps }) => (
                    <animated.div style={styles}>
                        <Component {...pageProps} />
                    </animated.div>
                ))}
            </Page>
        </MenuStateProvider>
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
