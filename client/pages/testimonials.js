import styled from 'styled-components';

const TestimonialsPageStyles = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://res.cloudinary.com/dtirfwiy8/image/upload/v1619200424/IMG_8148_kxvkm8.jpg');
    background-position: top left;
    background-size: cover;
`;

const TestimonialsPage = () => {
    return <TestimonialsPageStyles></TestimonialsPageStyles>;
};

export default TestimonialsPage;
