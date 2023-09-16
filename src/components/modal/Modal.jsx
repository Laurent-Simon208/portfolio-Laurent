import './modal.scss';
import works from '../../datas/works.json';
import React from 'react';

function Modal({ isOpen, closeModal, content }) {
    const data = works.find((e) => e.id === content);

    const modalClassName = isOpen ? 'modal modal-fullscreen' : 'modal';

    if (!isOpen) return null;
    console.log(data);
    return (
        <div className={modalClassName}>
            <div className='wraper-modal'>
                <div className='description-modal'>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <p>{data.skills}</p>
                </div>
                <div className='waper-img-modal'>
                    <div className='img-modal'>
                        <img src={data.image} alt="photo du site" className='image-modal' />
                    </div>
                </div>
                <div className='wrap-link-modal'>
                    <div className='link-modal'>
                        <ul className='modal-ul'>
                            <li className='modal-li'><a href={data.links.github} className='link-a'>Lien Git Hub</a></li>
                            <li className='modal-li'><a href={data.links.site} className='link-a'>Lien du site</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;