import { animated, useTransition } from 'react-spring';
import PropTypes from 'prop-types';

import Portal from './Portal';

const Modal = ({ modalOpen, setModalOpen }) => {
    const transition = useTransition(modalOpen, {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    });
    const pointerEvents = modalOpen ? 'all' : 'none';

    return (
        <div>
            hellloo
            {transition(
                (animation, item) =>
                    item && (
                        <Portal key={item}>
                            <div className="modal" style={{ pointerEvents }}>
                                <animated.div className="modal-card" style={animation}>
                                    <h1>richiecatty@googlemail.com</h1>
                                    <p>{`( copied to clipboard )`}</p>
                                    <button onClick={() => setModalOpen(false)}>X</button>
                                </animated.div>
                            </div>
                        </Portal>
                    )
            )}
        </div>
    );
};

Modal.propTypes = {
    modalOpen: PropTypes.bool,
    setModalOpen: PropTypes.func,
};

export default Modal;
