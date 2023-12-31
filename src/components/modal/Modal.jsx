import './modal.scss';
import React from 'react';



function Modal({ onClose, children }) {
    return (
        <div className="container-modal">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    x
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;