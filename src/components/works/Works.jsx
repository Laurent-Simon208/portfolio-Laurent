import './works.scss';
import works from '../../datas/works.json';
import Modal from '../modal/Modal';
import React, { useState, useEffect } from 'react';

function Works() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const openModal = (id) => {
        setSelectedProjectId(id);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setSelectedProjectId(null);
        setIsModalOpen(false);
    }
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isModalOpen) {
                const modal = document.querySelector('.modal');
                if (modal && !modal.contains(event.target)) {
                    closeModal();
                }
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isModalOpen]);

    return (
        <div className='wrap-works' id='sectionWorks'>
            <div className='wrapper-works'>
                <h1 className='works-h1'>Projets</h1>
                <div className='cards-projet'>
                    {works.map((work) => (
                        <div
                            className='card-projet'
                            onClick={() => openModal(work.id)}
                            style={{ backgroundImage: `url(${work.image})` }}
                            key={work.id}
                        >
                            <div className='card-description'>
                                <h2>{work.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} content={selectedProjectId} />
        </div>
    );
}

export default Works;