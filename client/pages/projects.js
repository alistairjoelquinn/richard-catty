import styled from 'styled-components';
import Head from 'next/head';

import { CardPageStyles } from '../components/styles/CardPageStyles';
import CardComponent from '../components/CardComponent';
import projects from '../content/projects.json';

const ProjectGridStyles = styled.div`
    padding-top: 7vh;
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    grid-auto-rows: 36vh;
    gap: 3vw;
    div:nth-child(2) {
        grid-row: 1 / 3;
        grid-column: 2 / 3;
        margin: auto;
    }
    @media (max-width: 950px) {
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        div:nth-child(2) {
            grid-row: auto;
            grid-column: auto;
        }
    }
`;

const ProjectsPage = () => {
    return (
        <>
            <Head>
                <title>Richard Catty - Projects</title>
            </Head>
            <CardPageStyles
                image="https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619200431/IMG_8101-3_rpodzj.jpg"
                fontSize="1.8rem"
                projects
                headerSize="2.7rem"
                title="Dried Samaras"
            >
                <ProjectGridStyles>
                    {projects.map(project => (
                        <CardComponent
                            key={project.title}
                            item={project}
                            showFooter={false}
                            headerPadding="medium"
                            bodyPadding="medium"
                        />
                    ))}
                </ProjectGridStyles>
            </CardPageStyles>
        </>
    );
};

export default ProjectsPage;
