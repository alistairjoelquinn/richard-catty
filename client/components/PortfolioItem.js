import { Card, CardHeader } from 'grommet';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';

const ReadMoreTextStyles = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    backdrop-filter: none;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.6rem;
    font-weight: bold;
    color: #1f1f1f;
    cursor: pointer;
    transition: backdrop-filter 0.2s linear;
    &:hover {
        backdrop-filter: blur(10px);
        span {
            opacity: 1;
        }
    }
    span {
        transition: opacity 0.2s linear;
        opacity: 0;
    }
`;

const ContainerStyles = styled.div`
    transition: transform 0.3s linear;
    &:hover {
        transform: scale(1.2);
    }
`;

const PortfolioItem = ({ item }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <ContainerStyles>
            <Card background="light-1" style={{ position: 'relative' }} onMouseOver={() => setReadMore(true)}>
                {readMore && (
                    <ReadMoreTextStyles>
                        <span>Read More</span>
                    </ReadMoreTextStyles>
                )}
                <CardHeader pad="small" style={{ cursor: 'pointer' }} title={item.title}>
                    {item.title}
                    <Image src={item.imageUrl} height="30" width={item.squareImage ? '30' : '100%'} />
                </CardHeader>
            </Card>
        </ContainerStyles>
    );
};

PortfolioItem.propTypes = {
    item: PropTypes.object,
};

export default PortfolioItem;
