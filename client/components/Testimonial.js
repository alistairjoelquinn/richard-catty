import { Button, Card, CardBody, CardFooter, CardHeader } from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Testimonial = ({ testimonial }) => {
    return (
        <Card background="light-1">
            <CardHeader pad="medium">
                {testimonial.title}
                <Image src={testimonial.imageUrl} height="30" width="100%" />
            </CardHeader>
            <CardBody pad="small">&quot;{testimonial.content}&quot;</CardBody>
            <CardFooter pad={{ horizontal: 'small' }} background="light-2">
                <Button icon={<Favorite color="red" />} hoverIndicator />
                <Button icon={<ShareOption color="plain" />} hoverIndicator />
            </CardFooter>
        </Card>
    );
};

Testimonial.propTypes = {
    testimonial: PropTypes.object,
};

export default Testimonial;
