import styled from 'styled-components';

import CardComponent from '../components/CardComponent';
import testimonials from '../content/testimonials.json';
import { CardPageStyles } from '../components/styles/CardPageStyles';

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

const TestimonialsPage = () => {
    return (
        <CardPageStyles
            image="https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619200424/IMG_8148_kxvkm8.jpg"
            fontSize="2.2rem"
            headerSize="2.7rem"
        >
            <TestimonialGridStyles>
                {testimonials.map(testimonial => (
                    <CardComponent key={testimonial.title} item={testimonial} showFooter={true} />
                ))}
            </TestimonialGridStyles>
        </CardPageStyles>
    );
};

export default TestimonialsPage;
