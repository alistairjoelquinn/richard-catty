import styled from 'styled-components';

const FooterStyles = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
`;

const Footer = () => {
    return (
        <FooterStyles>
            <div>Icon</div>
        </FooterStyles>
    );
};

export default Footer;
