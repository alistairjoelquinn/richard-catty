import styled from 'styled-components';
import { useSprings, animated } from 'react-spring';

import CardComponent from '../components/CardComponent';
import testimonials from '../content/testimonials.json';
import springValues from '../lib/animations/testimonialSprings.json';
import { CardPageStyles } from '../components/styles/CardPageStyles';
import CardSpring from '../components/CardSpring';
import SEO from '../components/SEO';
import { testimonialsPageImage } from '../content/mainPageImages.json';

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
        <>
            <SEO pageTitle="Richard Catty - Testimonials" pageImage={testimonialsPageImage} />
            <CardPageStyles
                image={testimonialsPageImage}
                fontSize="2.2rem"
                testimonial
                headerSize="2.7rem"
                title="Green Leaf"
            >
                <TestimonialGridStyles>
                    {springs.map((styles, idx) => {
                        return (
                            <animated.div key={testimonials[idx].title} style={styles}>
                                <CardSpring>
                                    <CardComponent
                                        item={testimonials[idx]}
                                        showFooter
                                        headerPadding="medium"
                                        bodyPadding="medium"
                                    />
                                </CardSpring>
                            </animated.div>
                        );
                    })}
                </TestimonialGridStyles>
            </CardPageStyles>
        </>
    );
};

export default TestimonialsPage;
