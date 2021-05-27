import { useState } from 'react';
import { animated, useTransition } from 'react-spring';

import CardItem from '../components/CardItem';
import testimonials from '../content/testimonials.json';
import { CardGridStyles, CardPageStyles } from '../components/styles/CardPageStyles';
import SEO from '../components/SEO';
import { testimonialsPageImage } from '../content/mainPageImages.json';
import { Card, CardBody, CardHeader } from 'grommet';

const TestimonialsPage = () => {
    const [showText, setShowText] = useState(null);

    const displayItemTextHandler = item => setShowText(item);

    const transition = useTransition(showText, {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    });

    return (
        <>
            <SEO pageTitle="Richard Catty - Testimonials" pageImage={testimonialsPageImage} />
            <CardPageStyles image={testimonialsPageImage} fontSize="2.2rem" headerSize="2.7rem">
                <CardGridStyles testimonial>
                    {testimonials.map((testimonial, idx) => (
                        <CardItem
                            key={idx}
                            item={testimonial}
                            displayItemTextHandler={displayItemTextHandler}
                            style={{ width: '50vw' }}
                            testimonial
                        />
                    ))}
                    {showText &&
                        transition(
                            (animation, item) =>
                                item && (
                                    <animated.div className="selected-text" style={{ ...animation, maxWidth: '40vw' }}>
                                        <Card background="light-1" pad="medium">
                                            <CardHeader style={{ paddingBottom: '1rem' }}>{showText.title}</CardHeader>
                                            <CardBody
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {showText.content}
                                            </CardBody>
                                        </Card>
                                    </animated.div>
                                )
                        )}
                </CardGridStyles>
            </CardPageStyles>
        </>
    );
};

export default TestimonialsPage;
