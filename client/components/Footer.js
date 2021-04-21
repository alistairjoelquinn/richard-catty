import { Instagram, Linkedin, Mail } from 'grommet-icons';
import styled from 'styled-components';

const FooterStyles = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 4rem;
`;

const Footer = () => {
    return (
        <FooterStyles>
            <Instagram />
            <Linkedin />
            <Mail />
        </FooterStyles>
    );
};

export default Footer;
