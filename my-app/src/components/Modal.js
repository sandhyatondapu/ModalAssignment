
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback } from 'react';
import Modal from 'react-bootstrap/Modal';
const ModalWindow = (props) => {
    const modalProps = { ...props.props };
    const closeModal = useCallback(() => {
        modalProps.setModalIsOpen(false);
    }, [modalProps.setModalIsOpen]);

    return <div>
        <Modal show={modalProps.modalIsOpen} onHide={closeModal} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Read counter</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal has been clicked {modalProps.countervalue} times</Modal.Body>
        </Modal>
    </div>
}
export default ModalWindow;