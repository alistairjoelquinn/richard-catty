import Typist from 'react-typist';
import styled from 'styled-components';

const TypingStyles = styled.div`
    position: absolute;
    top: 27vh;
    left: 5rem;
    z-index: 10;
    color: black;
    font-family: Cutive;
    font-size: 2.5rem;
    line-height: 3.5rem;
`;

const TypingText = () => {
    return (
        <TypingStyles>
            <Typist avgTypingDelay={50}>
                <Typist.Delay ms={1000} />I only work on projects I&apos;m passionate
                <br />
                about.
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
