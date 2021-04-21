import PropTypes from 'prop-types';
import { MenuStateProvider } from '../components/contexts/MenuProvider';

import Page from '../components/Page';

const App = ({ Component, pageProps }) => {
    return (
        <MenuStateProvider>
            <Page>
                <Component {...pageProps} />
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
};

export default App;
