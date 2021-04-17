import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

const HomePageStyles = styled.div`
    .image-container {
        position: relative;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        div {
            position: absolute;
            bottom: 0;
            right: 0;
            height: 110vh;
            width: 100vw;
        }
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
                <div className="image-container">
                    <Image
                        src="https://res.cloudinary.com/dtirfwiy8/image/upload/v1618683003/IMG_7997_dgi6hf.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="Pine Cone"
                    />
                </div>
            </HomePageStyles>
        </div>
    );
};

export default Home;
