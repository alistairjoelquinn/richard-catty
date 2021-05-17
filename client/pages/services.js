import Head from 'next/head';
import styled from 'styled-components';

const ServicesPageStyles = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619200419/IMG_8033-2_g3bw8f.jpg');
    background-position: top right;
    background-size: cover;
`;

const ServicesPage = () => {
    return (
        <>
            <Head>
                <title>Richard Catty - Services</title>
                <meta property="og:title" content="Richard Catty - Services" key="ogtitle" />
            </Head>
            <ServicesPageStyles></ServicesPageStyles>
        </>
    );
};

export default ServicesPage;
