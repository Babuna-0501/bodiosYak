import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero.jsx';
import Header from './components/Header/Header.jsx';
import ImageGallery from './components/Monthly/ImageGallery.jsx';
import CenterTitle from './components/CenterTitle/CenterTitle.jsx';
import BodiosYakDown from './components/BodiosYakDown.jsx';
import Video from './components/YakText/Video.jsx';
import MongolBg from './components/MongolBg.jsx';
import Footer from './components/Footer/Footer.jsx';
import DetailBodios from './components/MenuDetail/DetailBodios.jsx';
import About from './components/About/About.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Define routes */}
          <Route path="/" element={
            <>
              <Hero />
              <ImageGallery />
              <CenterTitle />
              <BodiosYakDown />
              <Video />
              <MongolBg />
              <Footer />
            </>
          } />
          <Route path="/bodios" element={<DetailBodios />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
