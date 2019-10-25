import { useState } from "react";
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalLove(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger" onClick={handleShow}>Показать насколько сильно</Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title><span role="img" aria-label="heart">💖💖💖💖💖💖💖💖💖💖</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Очень очень очень очень очень очень очень очень приочень сиииильно
                    <span role="img" aria-label="kiss">😘😘😘😘😘😘😘😘😘</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        <span role="img" aria-label="inlove">😍</span>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalLove