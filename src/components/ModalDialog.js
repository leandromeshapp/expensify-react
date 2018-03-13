import React from 'react';
import Modal from 'react-modal';

export const ModalDialog = props => (
    <Modal
        isOpen={props.modalOpen}
        className="modal"
        contentLabel={props.contentLabel}
        onRequestClose={props.handleModalCancel}
        shouldCloseOnOverlayClick={true}>
        {props.children}
    </Modal>
);