import styled from 'styled-components';
import Testimonial from '../components/Testimonial';

import testimonials from '../content/testimonials.json';

const TestimonialGridStyles = styled.div`
    display: grid;
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
    font-size: 2.1rem;
    background-image: url('https://res.cloudinary.com/dtirfwiy8/image/upload/v1619200424/IMG_8148_kxvkm8.jpg');
    background-position: top left;
    div > header {
        font-size: 2.5rem;
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
