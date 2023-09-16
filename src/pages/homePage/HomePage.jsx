import './homePage.scss';
import NavHeader from '../../components/navHeader/NavHeader';
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Works from '../../components/works/Works';
import Contact from '../../components/contact/Contact';
import './homePage.scss';

function App() {
  return (
    <div>
      <NavHeader />
      <Banner />
      <Works />
      <About />
      <Contact />
    </div>
  )
}

export default App;
