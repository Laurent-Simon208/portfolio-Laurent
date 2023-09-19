import './modal.scss';
import works from '../../datas/works.json';
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