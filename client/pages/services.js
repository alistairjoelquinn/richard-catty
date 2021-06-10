import styled from 'styled-components';

import SEO from '../components/SEO';
import services from '../content/services.json';
import { servicesPageImage } from '../content/mainPageImages.json';

const ServicesPageStyles = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: Cutive;
    background-image: url(${servicesPageImage});
    background-position: top right;
    background-size: cover;
    ul {
        padding: 22vh 7.5rem;
        li {
            font-size: 2.5rem;
            padding: 1rem;
            &:nth-child(1) {
                list-style-type: none;
                transform: translateX(-33px);
            }
        }
    }
    @media screen and (max-width: 800px) {
        background-position: top left;
    }
`;

const ServicesPage = () => {
    return (
        <>
            <SEO pageTitle="Richard Catty - Services" pageImage={servicesPageImage} />
            <ServicesPageStyles>
                <ul>
                    <li>Get in touch to discuss your project</li>
                    {services.map(service => (
                        <li key={service}>{service}</li>
                    ))}
                </ul>
            </ServicesPageStyles>
        </>
    );
};

export default ServicesPage;
