import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { Card, CardBody, CardHeader } from 'grommet';

import CardItem from '../components/CardItem';
import projects from '../content/projects.json';
import SEO from '../components/SEO';
import { projectsPageImage } from '../content/mainPageImages.json';
import { CardGridStyles, CardPageStyles } from '../components/styles/CardPageStyles';

const ProjectsPage = () => {
    const [showText, setShowText] = useState(null);

    const displayItemTextHandler = item => setShowText(item);

    const transition = useTransition(showText, {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    });

    return (
        <>
            <SEO pageTitle="Richard Catty - Portfolio" pageImage={projectsPageImage} />
            <CardPageStyles image={projectsPageImage} fontSize="1.5rem" headerSize="2.3rem">
                <CardGridStyles>
                    {projects.map((project, idx) => (
                        <CardItem key={idx} item={project} displayItemTextHandler={displayItemTextHandler} />
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

export default ProjectsPage;
