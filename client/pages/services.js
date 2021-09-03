import styled from 'styled-components';
import PropTypes from 'prop-types';
import { gql } from '@apollo/client';

import SEO from '../components/SEO';
import { servicesPageImage } from '../content/mainPageImages.json';
import { client } from './_app';

const GET_SERVICES_QUERY = gql`
    query {
        allService {
            services
        }
        Meta(id: "e5b86fe6-6ded-411f-86e9-885b9fd36581") {
            metaTitle
            metaDescription
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

const ServicesPage = ({ services, metadata }) => {
    return (
        <>
            <SEO meta={metadata} pageImage={servicesPageImage} />
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

export async function getServerSideProps() {
    const { data } = await client.query({
        query: GET_SERVICES_QUERY,
    });

    return {
        props: {
            services: data.allService[0].services,
            metadata: data.Meta,
        },
    };
}

ServicesPage.propTypes = {
    services: PropTypes.array,
    metadata: PropTypes.object,
};

export default ServicesPage;
