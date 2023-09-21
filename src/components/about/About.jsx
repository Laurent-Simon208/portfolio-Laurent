import './about.scss';
import Skills from '../skills/Skills';

function About() {
    return (
        <div className='wrapper-about'>
            <div className='wrap-about' id='sectionAbout'>
                <h1 className='about-h1'>Je me présente :</h1>
                <p className='about-p'>Je m'appelle Laurent Simon, je suis actuellement en reconversion professionnelle.<br />J'ai travaillé dans plusieurs domaines du bâtiment ces dix dernières années (cordiste, bardeur, charpentier, etc...) plus par nécessité que par choix.<br />Je suis un employé consciencieux, ce qui m'a amené dans ma carrière de cordiste à gérer de petites équipes et à avoir des missions techniques, j'en ai tiré un sens de l'organisation très développé.<br /><br />Il y a deux ans, je me suis posé les bonnes questions et j'ai pris la décision de m'orienter vers une profession correspondant plus à mes goûts personnels.<br />
                    J'ai eu la chance de part mon âge de voir le début de la démocratisation d'Internet et j'ai toujours été fasciné par ce potentiel qui me semble illimité.<br />Il y a quelques années, mon frère à commencé à créer et mettre en ligne des sites avec WordPress, je m'y suis intéressé et ai ressentit une certaine frustration de n'avoir accès qu'à la partie immergé de l'iceberg.<br />C'est à ce moment que j'ai décidé de passer de simple surfeur à créateur et que j'ai codé mes première lignes en HTML et Css. J'y ai pris goût instantanément et ai voulu apprendre de façon plus poussée et méthodique, j'ai donc quitté mon emploi pour me donner à 100%.<br /><br />
                    J'ai rejoint la formation de développeur Web en JavaScript sur Openclassroom et le réel apprentissage à débuté.<br />J'ai pu améliorer radicalement mon utilisation de HTML et Css et y intégrer JavaScript pour me permettre de créer un contenu dynamique. La suite logique à été React et je suis heureux d'avoir pu aller de l'autre côté de la barrière en apprenant les bases du Back-End avec Node et Express.<br />J'ai pu développer des compétences précises et je suis fier aujourd'hui de pouvoir dire que je peux créer un site de A à Z et d'avoir appris la gestion de projet pour pouvoir travailler en entreprise et en équipe. </p>
                <div className='about-skills'>
                    <Skills />
                </div>
            </div>
        </div>
    )
}
export default About;