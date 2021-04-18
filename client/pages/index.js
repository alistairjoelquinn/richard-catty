import Head from 'next/head';
import styled from 'styled-components';

const HomePageStyles = styled.div`
    .image-container {
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-image: url('https://res.cloudinary.com/dtirfwiy8/image/upload/q_20/v1618683003/IMG_7997_dgi6hf.jpg');
        background-position: bottom right;
        background-size: cover;
    }
`;

const Home = () => {
    return (
        <div>
            <Head>
                <title>Richard Catty</title>
                <link rel="icon" href="/static/favicon.ico" />
            </Head>

            <HomePageStyles>
                <div className="image-container"></div>
            </HomePageStyles>
        </div>
    );
};

export default Home;
