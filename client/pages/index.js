import Head from 'next/head';
import styled from 'styled-components';
import { Instagram, Linkedin, Mail } from 'grommet-icons';

import TypingText from '../components/TypingText';

const HomePageStyles = styled.div`
    .image-container {
        z-index: 3;
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-image: url('https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619116465/IMG_7997-3_rw78qh.jpg');
        background-position: bottom right;
        background-size: cover;
        footer {
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 5rem;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            gap: 4rem;
            svg {
                cursor: pointer;
            }
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
                    <TypingText />
                    <footer>
                        <Instagram />
                        <Linkedin />
                        <Mail />
                    </footer>
                </div>
            </HomePageStyles>
        </div>
    );
};

export default Home;
