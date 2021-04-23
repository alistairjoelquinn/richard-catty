import styled from 'styled-components';

const ProjectsPageStyles = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://res.cloudinary.com/dtirfwiy8/image/upload/v1619200431/IMG_8101-3_rpodzj.jpg');
    background-position: right;
    background-size: cover;
`;

const ProjectsPage = () => {
    return <ProjectsPageStyles></ProjectsPageStyles>;
};

export default ProjectsPage;
