import Page from "../components/Page";

const App = ({ Component, pageProps }) => {
    return (
        <Page>
            <Component {...pageProps} />
        </Page>
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

export default App;