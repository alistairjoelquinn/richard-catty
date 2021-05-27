import { Card, CardBody, CardHeader } from 'grommet';
import PropTypes from 'prop-types';
import Image from 'next/image';

const PortfolioItem = ({ item }) => {
    return (
        <Card background="light-1">
            <CardHeader pad="small">
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
