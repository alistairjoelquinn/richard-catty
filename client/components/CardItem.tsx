import { Card, CardHeader } from 'grommet';
import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { CardItemModel } from '../models/card';

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
    box-shadow: none;
    &:hover {
        backdrop-filter: blur(3px);
        background-color: rgba(255, 255, 255, 0.6);
        span {
            opacity: 1;
        }
    }
    span {
        transition: opacity 0.2s linear;
        opacity: 0;
    }
`;

interface CardItemProps {
    item: CardItemModel;
    displayItemTextHandler: (val: CardItemModel) => void;
}

const CardItem = ({ item, displayItemTextHandler }: CardItemProps) => {
    const [readMore, setReadMore] = useState(false);

    const readMoreHandler = (x: CardItemModel) => {
        setReadMore(true);
        displayItemTextHandler(x);
    };

    return (
        <div onMouseLeave={() => !isMobile && !isTablet && displayItemTextHandler(null)}>
            <Card
                background="light-1"
                style={{ position: 'relative', width: '100%' }}
                onMouseEnter={() => readMoreHandler(item)}
                onTouchEnd={() => displayItemTextHandler(item)}
            >
                {readMore && !isMobile && !isTablet && (
                    <ReadMoreTextStyles>
                        <span>Read More</span>
                    </ReadMoreTextStyles>
                )}
                <CardHeader pad="small" style={{ cursor: 'pointer' }} title={item.title}>
                    {item.title}
                    <Image src={item.imageUrl} height="30" width={item.squareImage ? '30' : '100%'} alt={item.title} />
                </CardHeader>
            </Card>
        </div>
    );
};

export default CardItem;
