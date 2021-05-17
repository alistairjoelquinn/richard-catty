import Head from 'next/head';
import styled from 'styled-components';

import services from '../content/services.json';

const ServicesPageStyles = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: Cutive;
    background-image: url('https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619200419/IMG_8033-2_g3bw8f.jpg');
    background-position: top right;
    background-size: cover;
    ul {
        padding: 15vh 5vw;
        li {
            font-size: 2.5rem;
            padding: 2rem;
            &:nth-child(1) {
                list-style-type: none;
                transform: translateX(-4rem);
            }
        }
    }
`;

const ServicesPage = () => {
    return (
        <>
            <Head>
                <title>Richard Catty - Services</title>
                <meta property="og:title" content="Richard Catty - Services" key="ogtitle" />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619200419/IMG_8033-2_g3bw8f.jpg"
                />
                <meta
                    name="twitter:image"
                    content="https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619200419/IMG_8033-2_g3bw8f.jpg"
                />
            </Head>
            <ServicesPageStyles>
                <ul>
                    <li>Services I provide. Please email for a quote.</li>
                    {services.map(service => (
                        <li key={service}>{service}</li>
                    ))}
                </ul>
            </ServicesPageStyles>
        </>
    );
};

export default ServicesPage;
