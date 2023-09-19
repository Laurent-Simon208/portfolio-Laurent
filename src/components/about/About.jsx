import './about.scss';
import Skills from '../skills/Skills';

function About() {
    return (
        <div className='wrapper-about'>
            <div className='wrap-about' id='sectionAbout'>
                <h1 className='about-h1'>Je me présente :</h1>
                <p className='about-p'>Je m'appelle Laurent Simon, je suis actuellement en reconversion professionnelle.<br />J'ai passé ces dix dernières années à alterner divers postes dans le bâtiment (cordiste, bardeur, charpentier, etc...) plus par nécessité que pas choix. J'ai toujours été un employé consciencieux ce qui m'a amené dans ma carrière de cordiste à gérer des petites équipes et à avoir des missions techniques (notamment d'installer des antennes de relais sur des tours téléphonique) j'en ai tiré un sens de l'organisation très développé.<br />Il y a deux ans, je me suis posé les bonnes questions et j'ai pris la décision de m'orienter vers une profession qui allie plus mes goûts personnels.<br />J'ai eu la chance de voir le début de la démocratisation d'Internet et j'ai toujours été fasciné par ce potentiel qui semble illimité. Il y a quelques années, mon frère à commencé à créer et mettre des sites en ligne avec WordPress, je m'y suis intéréssé et j'ai ressentit une certaine frustration de n'avoir accès qu'à la partie immergé de l'iceberg. C'est à ce moment que j'ai décidé de passer de simple surfeur à créateur et que j'ai codé mes première lignes en HTML et Css. J'y ai pris goût instantanément et j'ai voulu apprendre de façon plus poussée et méthodique, j'ai donc quitté mon emploi pour me donner à 100%. J'ai rejoint la formation de développeur Web en JavaScript sur Openclassroom et le réel apprentissage à débuté. J'ai pu améliorer radicalement mon utilisation de HTML et Css et y intégrer JavaScript pour permettre de créer un contenu dynamique. La suite logique à été React et je suis heureux d'avoir pu aller de l'autre côté de la barrière en apprenant les bases du Back-End avec Node et Express. J'ai pu développer des compétences précises et je suis fier aujourd'hui de pouvoir dire que je peux créer un site de A à Z et d'avoir appris la gestion de projet pour pouvoir travailler en entreprise et en équipe. </p>
                <div className='about-skills'>
                    <Skills />
                </div>
            </div>
        </div>
    )
}
export default About;