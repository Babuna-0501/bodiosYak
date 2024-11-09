import './App.css';
import Hero from './components/Hero.jsx'
import Header from './components/Header/Header.jsx';
import ImageGallery from './components/Monthly/ImageGallery.jsx';
import CenterTitle from './components/CenterTitle/CenterTitle.jsx';
import BodiosYakDown from './components/BodiosYakDown.jsx';
import Video from './components/YakText/Video.jsx';
import MongolBg from './components/MongolBg.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <ImageGallery/>
      <CenterTitle/>
      <BodiosYakDown/>
      <Video/>
      <MongolBg/>
      <Footer/>
    </div>
    // jdsdsa
  );
}

export default App;
