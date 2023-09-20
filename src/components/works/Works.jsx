import './works.scss';
import works from '../../datas/works.json';
import Modal from '../modal/Modal';
import React, { useState } from 'react';



function Works() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedWork, setSelectedWork] = useState(null);


    const openModal = (work) => {
        setSelectedWork(work);
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setSelectedWork(null);
        setIsModalOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            closeModal();
        }
    };
    const renderDescription = (description) => {
        const lines = description.split('\n');
        return lines.map((line, index) => (
            <p key={index}>{line}</p>
        ));
    };

    return (
        <div className='wrap-works' id='sectionWorks'>
            {isModalOpen && <div className='overlay' onClick={handleOverlayClick}></div>}
            <div className='wrapper-works'>
                <h1 className='works-h1'>Projets</h1>
                <div className='cards-projet'>
                    {works.map((work) => (
                        <div
                            className='card-projet'
                            style={{ backgroundImage: `url(${work.image})` }}
                            key={work.id}
                            onClick={() => openModal(work)}
                        >
                            <div className='card-description'>
                                <h2 className='h2-description'>{work.title}</h2>
                                <div className='skills-legend'>
                                    <h3 className='h3-skills'>Compétences exploités :</h3>
                                    <ul className='ul-skills'>
                                        {work.skills.map((skill, index) =>
                                            <li key={index} className='li-skill'><pre>&lt;{skill}/&gt;</pre></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <Modal onClose={closeModal}  >
                    {selectedWork && (

                        <div>
                            <div className='modal-legend'>
                                <h2 className='h2-modal'>{selectedWork.title}</h2>
                                <div className='modal-description'>
                                    {renderDescription(selectedWork.description)}
                                </div>
                                <ul className='modal-ul'>
                                    <li><a href={selectedWork.links.github} target="_blank" className='modal-li'>GitHub</a></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </Modal>
            )}
        </div>
    );
}

export default Works;
