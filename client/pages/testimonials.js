import styled from 'styled-components';
import { useSprings, animated } from 'react-spring';

import CardComponent from '../components/CardComponent';
import testimonials from '../content/testimonials.json';
import springValues from '../lib/animations/testimonialSprings.json';
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
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        div:nth-child(2) {
            grid-row: auto;
            grid-column: auto;
        }
    }
`;

const TestimonialsPage = () => {
    const springs = useSprings(
        springValues.length,
        springValues.map(item => ({
            from: {
                ...item[0],
            },
            to: {
                ...item[1],
            },
        }))
    );

    return (
        <CardPageStyles
            image="https://res.cloudinary.com/dtirfwiy8/image/upload/q_10/v1619200424/IMG_8148_kxvkm8.jpg"
            fontSize="2.2rem"
            testimonial
            headerSize="2.7rem"
        >
            <TestimonialGridStyles>
                {springs.map((spring, idx) => {
                    return (
                        <animated.div key={testimonials[idx].title} style={spring}>
                            <CardComponent
                                item={testimonials[idx]}
                                showFooter
                                headerPadding="medium"
                                bodyPadding="medium"
                            />
                        </animated.div>
                    );
                })}
            </TestimonialGridStyles>
        </CardPageStyles>
    );
};

export default TestimonialsPage;
