import Head from 'next/head';
import { Normalize } from 'styled-normalize';

import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

const Page: React.FC = ({ children }) => (
    <>
        <Head>
            <link rel="preload" href="/static/CutiveMono-Regular.ttf" as="font" crossOrigin="" />
            <link rel="preload" href="/static/MajorMonoDisplay-Regular.ttf" as="font" crossOrigin="" />
            <link rel="icon" href="/favicon.ico" />
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

export default Page;
