import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import { Instagram, Linkedin, Mail } from 'grommet-icons';

import TypingText from '../components/TypingText';
import SEO from '../components/SEO';
import { indexPageImage } from '../content/mainPageImages.json';
import Portal from '../components/Portal';

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

const ModalStyles = styled(animated.div)`
    position: absolute;
    top: 40vh;
    z-index: 5;
    background-color: #fff;
    color: black;
    font-size: 3rem;
`;

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const transition = useTransition(modalOpen, {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    });
    const pointerEvents = modalOpen ? 'all' : 'none';

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
                        <Mail onClick={() => setModalOpen(true)} />
                    </footer>
                </div>
                {transition(
                    (animation, item) =>
                        item && (
                            <Portal key={item}>
                                <div className="modal" style={{ pointerEvents }}>
                                    <ModalStyles className="modal-card" style={animation}>
                                        <h1>richiecatty@googlemail.com</h1>
                                        <p>{`( copied to clipboard )`}</p>
                                        <button onClick={() => setModalOpen(false)}>X</button>
                                    </ModalStyles>
                                </div>
                            </Portal>
                        )
                )}
            </HomePageStyles>
        </div>
    );
};

export default Home;
