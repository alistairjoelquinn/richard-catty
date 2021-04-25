import styled from 'styled-components';
import Testimonial from '../components/Testimonial';

import testimonials from '../content/testimonials.json';

const TestimonialGridStyles = styled.div`
    padding-top: 7vh;
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    grid-auto-rows: 36vh;
    gap: 3vw;
    div:nth-child(2) {
        grid-row: 1 / 3;
        grid-column: 2 / 3;
    }
`;

const TestimonialsPageStyles = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    padding: 0 5vw;
    font-family: Cutive;
    font-size: 2.2rem;
    background-image: url('https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619200424/IMG_8148_kxvkm8.jpg');
    background-position: center;
    background-size: cover;
    div > header {
        font-size: 2.7rem;
        font-weight: bold;
    }
`;

const TestimonialsPage = () => {
    return (
        <TestimonialsPageStyles>
            <TestimonialGridStyles>
                {testimonials.map(testimonial => (
                    <Testimonial key={testimonial.title} testimonial={testimonial} />
                ))}
            </TestimonialGridStyles>
        </TestimonialsPageStyles>
    );
};

export default TestimonialsPage;
