import styled from 'styled-components';

const ServicesPageStyles = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://res.cloudinary.com/dtirfwiy8/image/upload/q_20/v1619200419/IMG_8033-2_g3bw8f.jpg');
    background-position: bottom right;
    background-size: cover;
`;

const ServicesPage = () => {
    return (
        <ServicesPageStyles>
            <p>Services Page</p>
        </ServicesPageStyles>
    );
};

export default ServicesPage;
