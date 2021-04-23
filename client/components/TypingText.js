import Typist from 'react-typist';
import styled from 'styled-components';

const TypingStyles = styled.div`
    div {
        position: absolute;
        top: 25vh;
        left: 5rem;
        z-index: 10;
        color: black;
        font-family: Cutive;
        font-size: 2.5rem;
    }
`;

const TypingText = () => {
    return (
        <TypingStyles>
            <Typist avgTypingDelay={50}>
                <Typist.Delay ms={1000} />I only work on projects I&apos;m passionate
                <br></br>
                <br></br>
                about.
                <Typist.Delay ms={400} /> As an environment, conservation and
                <br></br>
                <br></br>
                <Typist.Delay ms={300} />
                sustainability focused copywriter,
                <Typist.Delay ms={500} /> my drive
                <br></br>
                <br></br>
                to protect the planet is translated into
                <br></br>
                <br></br>
                <Typist.Delay ms={300} />
                well researched,
                <Typist.Delay ms={500} /> engaging and SEO optimised
                <br></br>
                <br></br>
                copy,
                <Typist.Delay ms={300} /> content and articles...
            </Typist>
        </TypingStyles>
    );
};

export default TypingText;
