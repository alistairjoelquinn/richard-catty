import { Button, Card, CardBody, CardFooter, CardHeader } from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';

import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'

const GradientStyles = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.001) 0%, rgba(248, 248, 248, 1) 80%);
`;

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20

const wheel = (y: number) => {
    const imgHeight = window.innerWidth * 0.3 - 20
    return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
}


const CardComponent = ({ item, showFooter, gradient, headerPadding, bodyPadding }) => {
    useEffect(() => {
        const preventDefault = (e: Event) => e.preventDefault()
        document.addEventListener('gesturestart', preventDefault)
        document.addEventListener('gesturechange', preventDefault)

        return () => {
            document.removeEventListener('gesturestart', preventDefault)
            document.removeEventListener('gesturechange', preventDefault)
        }
    }, [])

    const domTarget = useRef(null)
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
        () => ({
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            zoom: 0,
            x: 0,
            y: 0,
            config: { mass: 5, tension: 350, friction: 40 },
        })
    )

    const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }))

    useGesture(
        {
            onDrag: ({ active, offset: [x, y] }) =>
                api.start({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
            onPinch: ({ offset: [d, a] }) => api.start({ zoom: d / 200, rotateZ: a }),
            onMove: ({ xy: [px, py], dragging }) =>
                !dragging &&
                api.start({
                    rotateX: calcX(py, y.get()),
                    rotateY: calcY(px, x.get()),
                    scale: 1.1,
                }),
            onHover: ({ hovering }) =>
                !hovering && api.start({ rotateX: 0, rotateY: 0, scale: 1 }),
            onWheel: ({ event, offset: [, y] }) => {
                event.preventDefault()
                wheelApi.set({ wheelY: y })
            },
        },
        { domTarget, eventOptions: { passive: false } }
    )
    return (
        <Card background="light-1" style={{ height: '100%' }}>
            <CardHeader pad={headerPadding}>
                {item.title}
                <Image src={item.imageUrl} height="30" width={item.squareImage ? '30' : '100%'} />
            </CardHeader>
            <CardBody pad={bodyPadding} style={{ paddingTop: 0 }}>
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
    headerPadding: PropTypes.string,
    bodyPadding: PropTypes.string,
};

export default CardComponent;
