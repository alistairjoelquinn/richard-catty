import Typist from 'react-typist';
import styled from 'styled-components';

const TypingStyles = styled.div`
    position: absolute;
    top: 27vh;
    padding: 0 5rem;
    z-index: 10;
    color: black;
    font-family: Cutive;
    font-size: 2.5rem;
    line-height: 3.5rem;
    @media screen and (max-width: 900px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 700px) {
        top: 15vh;
    }
    @media screen and (max-width: 500px) {
        font-size: 2.2rem;
        line-height: 3rem;
    }
    @media screen and (max-width: 500px) and (max-height: 700px) {
        font-size: 2rem;
        line-height: 2.8rem;
    }
    @media screen and (max-width: 500px) and (max-height: 600px) {
        font-size: 1.7rem;
        line-height: 2.4rem;
    }
    @media screen and (orientation: landscape) and (max-width: 900px) {
        top: 27vh;
        font-size: 1.6rem;
        line-height: 2.2rem;
    }
    @media screen and (orientation: landscape) and (max-width: 600px) {
        top: 27vh;
        font-size: 1.2rem;
        line-height: 2rem;
    }
`;

const TypingText = () => {
    return (
        <TypingStyles>
            <Typist avgTypingDelay={50}>
                <Typist.Delay ms={1000} />I only work on projects I believe in.
                <br />
                <Typist.Delay ms={400} /> As an environment, conservation and
                <br />
                <Typist.Delay ms={300} />
                sustainability focused copywriter,
                <Typist.Delay ms={500} /> my drive
                <br />
                to protect the planet is translated into
                <br />
                <Typist.Delay ms={300} />
                well researched,
                <Typist.Delay ms={500} /> engaging and SEO optimised
                <br />
                copy,
                <Typist.Delay ms={300} /> content and articles...
            </Typist>
        </TypingStyles>
    );
};

export default TypingText;
