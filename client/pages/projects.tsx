import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { Card, CardBody, CardHeader } from 'grommet';
import { isMobile, isTablet } from 'react-device-detect';
import { gql } from '@apollo/client';

import CardItem from '../components/CardItem';
import CardWrapper from '../components/CardWrapper';
import SEO from '../components/SEO';
import { projectsPageImage } from '../content/mainPageImages';
import { CardGridStyles, CardPageStyles, CardItemStyles, CardLinkStyles } from '../components/styles/CardPageStyles';
import { client } from './_app';

const GET_PROJECTS_QUERY = gql`
    query {
        allProject {
            title
            content
            position
            since
            responsibilities
            url
            imageUrl
            squareImage
        }
        Meta(id: "333915a4-7eb2-4640-8976-006097ed05a7") {
            metaTitle
            metaDescription
        }
    }
`;

const ProjectsPage = ({ projects, metadata }) => {
    const [showText, setShowText] = useState(null);

    const displayItemTextHandler = (item) => setShowText(item);

    const transition = useTransition(showText, {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    });

    return (
        <>
            <SEO meta={metadata} pageImage={projectsPageImage} />
            <CardPageStyles image={projectsPageImage} fontSize="1.5rem" headerSize="2.3rem">
                <CardGridStyles isMobile={isMobile} isTablet={isTablet} projects>
                    {projects.map((project, idx) => (
                        <CardWrapper key={idx} url={project.url}>
                            <CardItem item={project} displayItemTextHandler={displayItemTextHandler} />
                        </CardWrapper>
                    ))}
                    {showText &&
                        transition(
                            (animation, item) =>
                                item && (
                                    <animated.div
                                        className="selected-text"
                                        id="selected-text"
                                        style={{
                                            ...animation,
                                            zIndex: 11,
                                        }}
                                    >
                                        <Card background="light-1" pad="medium">
                                            <CardHeader style={{ paddingBottom: '1rem' }}>{showText.title}</CardHeader>
                                            <div>
                                                <CardBody
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {showText.content}
                                                    <CardItemStyles>
                                                        <h3>Position:</h3>
                                                        <h3>{showText.position}</h3>
                                                    </CardItemStyles>
                                                    <CardItemStyles>
                                                        <h3>Since:</h3>
                                                        <h3>{showText.since}</h3>
                                                    </CardItemStyles>
                                                    <CardItemStyles responsibilities>
                                                        <h3>Responsibilities:</h3>
                                                        <ul>
                                                            {showText.responsibilities.map((it: string) => (
                                                                <li key={it}>{it}</li>
                                                            ))}
                                                        </ul>
                                                    </CardItemStyles>
                                                    {(isMobile || isTablet) && (
                                                        <CardLinkStyles>
                                                            <a
                                                                href={showText.url}
                                                                target="_blank"
                                                                rel="noreferrer noopener"
                                                            >
                                                                Read More
                                                            </a>
                                                            <div onTouchEnd={() => setShowText(null)}>Close</div>
                                                        </CardLinkStyles>
                                                    )}
                                                </CardBody>
                                            </div>
                                        </Card>
                                    </animated.div>
                                ),
                        )}
                </CardGridStyles>
            </CardPageStyles>
        </>
    );
};

export async function getStaticProps() {
    const { data } = await client.query({
        query: GET_PROJECTS_QUERY,
    });

    return {
        props: {
            projects: data.allProject,
            metadata: data.Meta,
        },
    };
}

export default ProjectsPage;
