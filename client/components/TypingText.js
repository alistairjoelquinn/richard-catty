import Typist from 'react-typist';
import styled from 'styled-components';

const TypingStyles = styled.div`
    div {
        position: absolute;
        top: 15vh;
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
            <Typist>
                <Typist.Delay ms={1000} />
                I only work on projects
                <Typist.Delay ms={400} /> I&apos;m passionate about.
                <br></br>
                <br></br>
                <Typist.Delay ms={700} />
                As an environment, conservation and sustainability
                <br></br>
                <br></br>
                <Typist.Delay ms={300} />
                focused copywriter, my drive to protect the planet
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
        </TypingStyles>
    );
};

export default TypingText;
