import { Button, Card, CardBody, CardFooter, CardHeader } from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';

const GradientStyles = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.001) 0%, rgba(248, 248, 248, 1) 75%);
`;

const CardComponent = ({ item, showFooter, gradient }) => {
    return (
        <Card background="light-1">
            <CardHeader pad="medium">
                {item.title}
                <Image src={item.imageUrl} height="30" width={item.squareImage ? '30' : '100%'} />
            </CardHeader>
            <CardBody pad="small">
                {gradient ? (
                    <div style={{ position: 'relative' }}>
                        <GradientStyles></GradientStyles>
                        &quot;{item.content}&quot;
                    </div>
                ) : (
                    <div>&quot;{item.content}&quot;</div>
                )}
            </CardBody>
            {showFooter && (
                <CardFooter pad={{ horizontal: 'small' }} background="light-2">
                    <Button icon={<Favorite color="red" />} hoverIndicator />
                    <Button icon={<ShareOption color="plain" />} hoverIndicator />
                </CardFooter>
            )}
        </Card>
    );
};

CardComponent.propTypes = {
    item: PropTypes.object,
    showFooter: PropTypes.bool,
    gradient: PropTypes.bool,
};

export default CardComponent;
