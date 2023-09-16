import './navHeader.scss';

function NavHeader() {
    return (
        <div className="nav-header">
            <ul className="ul-nav">
                <li className="li-nav"><a href="#sectionAbout">présentation</a></li>
                <li className="li-nav"><a href="#sectionWorks"> Projets</a></li>
                <li className="li-nav"><a href="#sectionContact">Contact</a></li>
            </ul>
        </div>
    )


}
export default NavHeader;