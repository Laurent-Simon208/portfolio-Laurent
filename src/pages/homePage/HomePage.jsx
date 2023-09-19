import './homePage.scss';
import NavHeader from '../../components/navHeader/NavHeader';
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Works from '../../components/works/Works';
import Contact from '../../components/contact/Contact';
import ArrowUpPage from '../../components/arrowUpPage/ArrowUpPage';
import './homePage.scss';

function App() {
  return (
    <div>
      <NavHeader />
      <Banner />
      <ArrowUpPage />
      <Works />
      <About />
      <Contact />
    </div>
  )
}

export default App;
