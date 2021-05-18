import styled from 'styled-components';

import CardComponent from '../components/CardComponent';
import testimonials from '../content/testimonials.json';
import { CardPageStyles } from '../components/styles/CardPageStyles';
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
                    {testimonials.map((testimonial, idx) => {
                        return (
                            <div key={idx}>
                                <CardComponent
                                    item={testimonial}
                                    showFooter
                                    headerPadding="medium"
                                    bodyPadding="medium"
                                />
                            </div>
                        );
                    })}
                </TestimonialGridStyles>
            </CardPageStyles>
        </>
    );
};

export default TestimonialsPage;
