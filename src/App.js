import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero.jsx';
import Header from './components/Header/Header.jsx';
import BodiosLayout from './components/Monthly/BodiosLayout.jsx';
import BodiosYakDown from './components/BodiosYakDown.jsx';
import Video from './components/YakText/Video.jsx';
import MongolBg from './components/MongolBg.jsx';
import Footer from './components/Footer/Footer.jsx';
import DetailBodios from './components/MenuDetail/DetailBodios.jsx';
import About from './components/About/About.jsx';
import YakDetail from './components/YaKDetail/YakDetail.jsx';
import Social from './components/Social/Social.jsx';
import ProductsPage from './components/Women/ProductsPage.jsx';
import { MenCollection } from './components/Men/MenCollection.jsx';
import { BrandStory } from './components/Core/BrandStory.jsx';
import { Artisan } from './components/Artisan/Artisan.jsx';
import Triple from './components/Triple/Triple.jsx';



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
              <BodiosLayout />
              <BodiosYakDown />
             
       
              {/* <Video /> */}
             
              <Artisan/>
              {/* <Triple/> */}
              <BrandStory/>
             
              {/* <MongolBg /> */}
            </>
          } />
          <Route path="/bodios" element={<DetailBodios />} />
          <Route path="/about" element={<About />} />
          <Route path="/yak" element={<YakDetail/>} />
          <Route path="/social" element={<Social/>} />
          <Route path="/women" element={<ProductsPage/>} />
          <Route path="/men" element={<MenCollection/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
