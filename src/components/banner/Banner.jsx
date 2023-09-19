import React from 'react';
import './banner.scss';
import photoDeMoi from '../../assets/IMG_20230520_170959.jpg';

function Banner() {

    return (
        <section className='section-banner' id='upPage'>
            <div className='banner' >
                <div className='banner-h'>
                    <h1 className='h1-banner'>Laurent Simon</h1>
                    <h2 className='h2-banner'>Développeur web</h2>
                </div>
                <div className='banner-photo'>
                    <img className='banner-img' src={photoDeMoi} alt="photo de moi" />
                </div>
            </div>
        </section>
    );
}

export default Banner;
