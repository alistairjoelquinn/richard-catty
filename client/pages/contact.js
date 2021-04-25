import styled from 'styled-components';

const ContactPageStyles = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619200418/IMG_8063_uvjyzf.jpg');
    background-position: center;
    background-size: cover;
`;

const ContactPage = () => {
    return <ContactPageStyles></ContactPageStyles>;
};

export default ContactPage;
