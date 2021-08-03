import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

import SEO from '../components/SEO';
import { servicesPageImage } from '../content/mainPageImages.json';

const GET_SERVICES_QUERY = gql`
    query {
        allService {
            services
        }
    }
`;

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
    overflow: hidden;
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
    @media screen and (orientation: landscape) and (max-width: 800px) {
        ul {
            li {
                font-size: 1.5rem;
            }
        }
    }
`;

const ServicesPage = () => {
    const { loading, error, data } = useQuery(GET_SERVICES_QUERY);

    if (loading) return null;
    if (error) return null;

    const services = data.allService[0].services;

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
