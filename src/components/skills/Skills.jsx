import './skills.scss';
import logoHtml from '../../assets/logos/html-5.png';
import logoCss from '../../assets/logos/css-3.png';
import logoSass from '../../assets/logos/sass.png';
import logoJs from '../../assets/logos/js.png';
import logoReact from '../../assets/logos/icons8-réagir-160.png';
import logoNode from '../../assets/logos/icons8-nodejs-144.png';

function Skills() {
    return (
        <div className='skills'>
            <h2 className='about-h2'>Je maitrise :</h2>
            <ul className='ul-skills'>
                <li className='li-skill' ><img src={logoHtml} alt="logo html" className='logo-skills' /></li>
                <li className='li-skill'><img src={logoCss} alt="logo css" className='logo-skills' /></li>
                <li className='li-skill'><img src={logoSass} alt="logo sass" className='logo-skills' /></li>
                <li className='li-skill'><img src={logoJs} alt="logo javascript" className='logo-skills' /></li>
                <li className='li-skill'><img src={logoReact} alt="logo react" className='logo-skills' /></li>
                <li className='li-skill'><img src={logoNode} alt="logo node" className='logo-skills' /></li>
            </ul>

        </div>
    )
};

export default Skills;