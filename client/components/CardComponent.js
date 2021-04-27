import { Button, Card, CardBody, CardFooter, CardHeader } from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons';
import PropTypes from 'prop-types';
import Image from 'next/image';

const CardComponent = ({ item, showFooter }) => {
    return (
        <Card background="light-1">
            <CardHeader pad="medium">
                {item.title}
                <Image src={item.imageUrl} height="30" width={item.squareImage ? '30' : '100%'} />
            </CardHeader>
            <CardBody pad="small">&quot;{item.content}&quot;</CardBody>
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
};

export default CardComponent;
