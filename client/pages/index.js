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
    @media screen and (max-width: 900px) {
        .image-container {
            background-position: top left;
        }
    }
`;

const ModalContainerStyles = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        font-family: Cutive;
        background: white;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        padding: 3rem;
    }
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
                                <ModalContainerStyles
                                    className="modal"
                                    style={{ pointerEvents }}
                                    onClick={() => setModalOpen(false)}
                                >
                                    <animated.div
                                        className="modal-card"
                                        style={animation}
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <h1>richiecatty@gmail.com</h1>
                                    </animated.div>
                                </ModalContainerStyles>
                            </Portal>
                        )
                )}
            </HomePageStyles>
        </div>
    );
};

export default Home;
