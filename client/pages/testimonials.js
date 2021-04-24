import { Button, Card, CardBody, CardFooter, CardHeader } from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons';
import styled from 'styled-components';
import Image from 'next/image';

const TestimonialsPageStyles = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Cutive;
    font-size: 2.1rem;
    background-image: url('https://res.cloudinary.com/dtirfwiy8/image/upload/v1619200424/IMG_8148_kxvkm8.jpg');
    background-position: top left;
    background-size: cover;
    div > header {
        font-size: 2.5rem;
        font-weight: bold;
    }
`;

const TestimonialsPage = () => {
    return (
        <TestimonialsPageStyles>
            <Card height="45vh" width="50vw" background="light-1">
                <CardHeader pad="medium">
                    Virunga National Park
                    <Image src="/images/logo_fr@2-1.png" height="30" width="30" />
                </CardHeader>
                <CardBody pad="small">
                    &quot;Richard is a very talented writer. His passion for conservation and wildlife is evident
                    through his work. He is a pleasure to work with - enthusiastic, flexible, and patient - I would
                    highly recommend him.&quot;
                </CardBody>
                <CardFooter pad={{ horizontal: 'small' }} background="light-2">
                    <Button icon={<Favorite color="red" />} hoverIndicator />
                    <Button icon={<ShareOption color="plain" />} hoverIndicator />
                </CardFooter>
            </Card>
        </TestimonialsPageStyles>
    );
};

export default TestimonialsPage;
