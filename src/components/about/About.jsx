import './about.scss';
import Skills from '../skills/Skills';

function About() {
    return (
        <div className='wrapper-about'>
            <div className='wrap-about' id='sectionAbout'>
                <h1 className='about-h1'>A propos de moi :</h1>
                <p className='about-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio ullam atque minus? Et facere suscipit ratione debitis, iure ipsa qui dolorem, sunt animi quo eaque, doloremque asperiores ducimus pariatur?</p>
                <div className='about-skills'>
                    <Skills />
                </div>
            </div>
        </div>
    )
}
export default About;