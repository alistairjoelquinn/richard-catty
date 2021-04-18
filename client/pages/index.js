import Head from 'next/head';
import styled from 'styled-components';
import Typist from 'react-typist';

const HomePageStyles = styled.div`
    .image-container {
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-image: url('https://res.cloudinary.com/dtirfwiy8/image/upload/q_20/v1618683003/IMG_7997_dgi6hf.jpg');
        background-position: bottom right;
        background-size: cover;
        div {
            position: absolute;
            top: 15vh;
            left: 5rem;
            z-index: 10;
            color: black;
            font-family: Cutive;
            font-size: 3rem;
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
                    <Typist>
                        <Typist.Delay ms={1000} />
                        I only work on projects
                        <Typist.Delay ms={400} /> I&apos;m passionate about.
                        <br></br>
                        <br></br>
                        <Typist.Delay ms={700} />
                        As an environment, conservation and sustainability focused
                        <br></br>
                        <br></br>
                        <Typist.Delay ms={300} />
                        copywriter, my drive to protect the planet
                        <br></br>
                        <br></br>
                        <Typist.Delay ms={600} />
                        is translated into well researched,
                        <br></br>
                        <br></br>
                        <Typist.Delay ms={300} />
                        engaging and SEO optimised
                        <br></br>
                        <br></br>
                        <Typist.Delay ms={200} />
                        copy, content and articles...
                    </Typist>
                </div>
            </HomePageStyles>
        </div>
    );
};

export default Home;
