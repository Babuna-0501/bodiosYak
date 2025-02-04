import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero.jsx';
import Header from './components/Header/Header.jsx';
import BodiosYakDown from './components/BodiosYakDown.jsx';
import Footer from './components/Footer/Footer.jsx';
import DetailBodios from './components/MenuDetail/DetailBodios.jsx';
import About from './components/About/About.jsx';
import YakDetail from './components/YaKDetail/YakDetail.jsx';
import Social from './components/Social/Social.jsx';
import ProductsPage from './components/Women/ProductsPage.jsx';
import { MenCollection } from './components/Men/MenCollection.jsx';
import { BrandStory } from './components/Core/BrandStory.jsx';
import { Artisan } from './components/Artisan/Artisan.jsx';
import { BrandDescription } from './components/BrandDescription/BrandDescription.jsx';
import BoutiqueHeader from './components/BoutiqueHeader/BoutiqueHeader.jsx';
import { ImageGallery } from './components/Three/ImageGallery.jsx';
import HeaderWhite from './components/HeaderLing/HeaderWhite.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Homepage Route with Header */}
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <BoutiqueHeader />
              <BodiosYakDown />
              <BrandDescription />
              <ImageGallery />
              <Artisan />
              <BrandStory />
            </>
          } />

          {/* Other Pages with HeaderWhite */}
          <Route path="/bodios" element={<><HeaderWhite /><DetailBodios /></>} />
          <Route path="/about" element={<><HeaderWhite /><About /></>} />
          <Route path="/yak" element={<><HeaderWhite /><YakDetail /></>} />
          <Route path="/social" element={<><HeaderWhite /><Social /></>} />
          <Route path="/women" element={<><HeaderWhite /><ProductsPage /></>} />
          <Route path="/men" element={<><HeaderWhite /><MenCollection /></>} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
