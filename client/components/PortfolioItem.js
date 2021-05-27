import { Card, CardHeader } from 'grommet';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';

const ReadMoreTextStyles = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(5px);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.6rem;
    font-weight: bold;
    color: black;
    cursor: pointer;
`;

const PortfolioItem = ({ item }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <Card background="light-1" style={{ position: 'relative' }} onMouseOver={() => setReadMore(true)}>
            {readMore && <ReadMoreTextStyles onMouseOut={() => setReadMore(false)}>Read More</ReadMoreTextStyles>}
            <CardHeader pad="small" style={{ cursor: 'pointer' }} title={item.title}>
                {item.title}
                <Image src={item.imageUrl} height="30" width={item.squareImage ? '30' : '100%'} />
            </CardHeader>
        </Card>
    );
};

PortfolioItem.propTypes = {
    item: PropTypes.object,
};

export default PortfolioItem;
