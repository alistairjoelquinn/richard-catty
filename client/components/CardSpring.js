import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated, to } from 'react-spring';
import { useGesture } from 'react-use-gesture';

import styles from './styles/card.module.css';

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

const wheel = y => {
    const imgHeight = window.innerWidth * 0.3 - 20;
    return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`;
};

const CardSpring = ({ children }) => {
    useEffect(() => {
        const preventDefault = e => e.preventDefault();
        document.addEventListener('gesturestart', preventDefault);
        document.addEventListener('gesturechange', preventDefault);

        return () => {
            document.removeEventListener('gesturestart', preventDefault);
            document.removeEventListener('gesturechange', preventDefault);
        };
    }, []);

    const domTarget = useRef(null);
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(() => ({
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        zoom: 0,
        x: 0,
        y: 0,
        config: { mass: 5, tension: 150, friction: 40 },
    }));

    const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }));

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
            onHover: ({ hovering }) => !hovering && api.start({ rotateX: 0, rotateY: 0, scale: 1 }),
            onWheel: ({ event, offset: [, y] }) => {
                event.preventDefault();
                wheelApi.set({ wheelY: y });
            },
        },
        { domTarget, eventOptions: { passive: false } }
    );
    return (
        <div className={styles.container}>
            <animated.div
                ref={domTarget}
                className={styles.card}
                style={{
                    transform: 'perspective(600px)',
                    x,
                    y,
                    scale: to([scale, zoom], (s, z) => s + z),
                    rotateX,
                    rotateY,
                    rotateZ,
                }}
            >
                <animated.div>{children}</animated.div>
            </animated.div>
        </div>
    );
};

CardSpring.propTypes = {
    children: PropTypes.any,
};

export default CardSpring;
