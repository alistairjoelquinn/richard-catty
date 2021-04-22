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

    const transition = useTransition(transitionItems, item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return (
        <MenuStateProvider>
            {transition.map(({ item: { Component, pageProps }, key, props }) => (
                <animated.h1 key={key} style={props}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </animated.h1>
            ))}
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
