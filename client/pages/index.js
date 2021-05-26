import styled from 'styled-components';
import { Instagram, Linkedin, Mail } from 'grommet-icons';

import TypingText from '../components/TypingText';
import SEO from '../components/SEO';
import { indexPageImage } from '../content/mainPageImages.json';

const HomePageStyles = styled.div`
    .image-container {
        z-index: 3;
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-image: url(${indexPageImage});
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
            <SEO pageTitle="Richard Catty" pageImage={indexPageImage} />
            <HomePageStyles>
                <div className="image-container" title="Pine Cone">
                    <TypingText />
                    <footer>
                        <a href="https://www.instagram.com/cattycattycool/" target="_blank" rel="noreferrer noopener">
                            <Instagram />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/richard-catty-062090159/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Linkedin />
                        </a>
                        <Mail />
                    </footer>
                </div>
            </HomePageStyles>
        </div>
    );
};

export default Home;
