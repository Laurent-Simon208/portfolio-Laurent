import works from '../../datas/works.json';
import { useParams } from "react-router-dom";
import './workPage.scss'
import NavHeader from '../../components/navHeader/NavHeader';

function WorksPage() {
    const { id } = useParams();
    const data = works.find((e) => e.id === id);
    console.log(id);

    return (
        <div>
            <NavHeader />
            <div className='wraper-wp'>
                <div className='description-wp'>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <p>{data.skills}</p>
                </div>
                <div className='waper-img-wp'>
                    <div className='img-wp'>
                        <img src={data.image} alt="photo du site" className='image-wp' />
                    </div>
                </div>
                <div className='wrap-link-wp'>
                    <div className='link-wp'>
                        <ul className='link-ul'>
                            <li className='link-li'><a href={data.links.github} className='link-a'>Lien Git Hub</a></li>
                            <li className='link-li'><a href={data.links.site} className='link-a'>Lien du site</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorksPage;