/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Bag from '../../assets/bag.png'

const Header = () => {
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const [boutiqueOpen, setBoutiqueOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const navigate = useNavigate();

  const handleDiscoverHover = () => {
    setDiscoverOpen(true);
    setBoutiqueOpen(false);
  };

  const handleBoutiqueHover = () => {
    setBoutiqueOpen(true);
    setDiscoverOpen(false);
  };

  const handleMenuItemClick = () => {
    setDiscoverOpen(false);
    setBoutiqueOpen(false);
    setMobileMenuOpen(false); 
  };

  const navigateToBodios = () => {
    navigate('/bodios');
    handleMenuItemClick();
  };

  const navigateToAbout = () => {
    navigate('/about');
    handleMenuItemClick();
  };

  const navigateToYakDetail = () => {
    navigate('/yak');
    handleMenuItemClick();
  };

  const navigateToSocial = () => {
    navigate('/social');
    handleMenuItemClick();
  };

  const navigateToHome = () => {
    navigate('/');
    handleMenuItemClick();
  };

  const navigateToProductWomen = () => {
    navigate('/women');
    handleMenuItemClick();
  };

  const navigateToProductMen = () => {
    navigate('/men');
    handleMenuItemClick();
  };

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      // Disable scrolling on both axes and fix position
      document.body.style.overflow = 'hidden'; // Disable scrolling
      document.documentElement.style.overflow = 'hidden'; // Prevent scroll on root element
      document.body.style.position = 'fixed'; // Fix body position
      document.body.style.width = '100%'; // Prevent horizontal scroll (if content width exceeds viewport)
    } else {
      // Re-enable scrolling when the menu is closed
      document.body.style.overflow = ''; // Re-enable scrolling
      document.documentElement.style.overflow = ''; // Reset overflow on root
      document.body.style.position = ''; // Reset position to allow scrolling again
      document.body.style.width = ''; // Reset width to allow scrolling
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full bg-transparent fixed mx-auto transition-colors  group xl:h-[80px] sm:h-[52px] z-20">

      {/* Desktop Header */}
      <div className="hidden md:flex justify-between hover:bg-[#EDEBE8] items-center w-full mx-auto h-auto min-h-[60px] md:min-h-[80px] px-4 md:px-6 lg:px-20">
        {/* Left Links */}
        <nav className="flex space-x-4 md:space-x-6 font-light text-white text-[13px] sm:text-[11px] md:text-[13px] lg:text-[15px]">
          <a
            href="#"
            className="hover:bg-[#EDEBE8] transition-colors px-3 md:px-4 py-1 md:py-2 rounded-md group-hover:text-black"
            onMouseEnter={handleDiscoverHover}
            onMouseLeave={() => {}}
          >
            Discover
          </a>
          <a
            href="#"
            className="hover:bg-[#EDEBE8] transition-colors px-3 md:px-4 py-1 md:py-2 rounded-md group-hover:text-black"
            onMouseEnter={handleBoutiqueHover}
            onMouseLeave={() => {}}
          >
            Boutique
          </a>
        </nav>

        {/* Center Title */}
        <h1
          onClick={navigateToHome}
          className="text-white text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[22px] font-semibold tracking-wide font-thin cursor-pointer group-hover:hidden"
        >
          BODIOS YAK DOWN
        </h1>

        {/* Center Title Image (on hover) */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b579b0acb0e565e43c6894a52d0889061ba28b8ee4f4cf227acb566a436cddbe?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
          alt="Center Title"
          className="w-auto h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-[150px] sm:w-[160px] md:w-[180px] lg:w-[200px] m-auto hidden group-hover:block cursor-pointer"
          onClick={navigateToHome}
        />

        {/* Right Links */}
        <div className="flex space-x-4 md:space-x-6 font-light text-white text-[13px] sm:text-[11px] md:text-[13px] lg:text-[15px]">
          <a href="#" className="hover:bg-[#EDEBE8] transition-colors px-3 md:px-4 py-1 md:py-2 rounded-md group-hover:text-black">
            Search
          </a>
          <a href="#" className="hover:bg-[#EDEBE8] transition-colors px-3 md:px-4 py-1 md:py-2 rounded-md group-hover:text-black">
            Cart (0)
          </a>
          <a href="#" className="hover:bg-[#EDEBE8] transition-colors px-3 md:px-4 py-1 md:py-2 rounded-md group-hover:text-black">
            Login
          </a>
        </div>
      </div>


    {/* Mobile Burger Menu */}
    <div className="md:hidden flex items-center px-4 py-2 w-[100vw] justify-between">
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
        {/* Burger Icon when menu is closed */}
        {!mobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          // X Icon when menu is opened
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* Title with conditional color */}
      <h1 className={`text-center ${mobileMenuOpen ? 'text-black' : 'text-white'}`}>BODIOS YAK DOWN</h1>

      <img src={Bag} />
    </div>

{/* Mobile Menu Content */}
{mobileMenuOpen && (
  <div className="md:hidden bg-[#EDEBE8] absolute top-10 left-0 w-full z-20 h-[100vh]">
    <nav className="flex flex-col items-start space-y-4 text-black p-6 text-[18px]">
      <a href="/" className="hover:text-gray-400 transition-colors px-4 py-2 rounded-md" onClick={() => { navigateToHome(); handleMenuItemClick(); }}>
        Home
      </a>
      <a href="#" className="hover:text-gray-400 transition-colors px-4 py-2 rounded-md" onClick={() => { navigateToBodios(); handleMenuItemClick(); }}>
        Bodios
      </a>
      <a href="#" className="hover:text-gray-400 transition-colors px-4 py-2 rounded-md" onClick={() => { navigateToAbout(); handleMenuItemClick(); }}>
        About us
      </a>
      <a href="#" className="hover:text-gray-400 transition-colors px-4 py-2 rounded-md" onClick={() => { navigateToYakDetail(); handleMenuItemClick(); }}>
        Yak
      </a>
      <a href="#" className="hover:text-gray-400 transition-colors px-4 py-2 rounded-md" onClick={() => { navigateToSocial(); handleMenuItemClick(); }}>
        Social Responsibility
      </a>
      <a href="#" className="hover:text-gray-400 transition-colors px-4 py-2 rounded-md" onClick={() => { handleMenuItemClick(); }}>
        Bodios People
      </a>
      <a href="#" className="hover:text-gray-400 transition-colors px-4 py-2 rounded-md" onClick={() => { navigateToProductWomen(); handleMenuItemClick(); }}>
        Women
      </a>
      <a href="#" className="hover:text-gray-400 transition-colors px-4 py-2 rounded-md" onClick={() => { navigateToProductMen(); handleMenuItemClick(); }}>
        Men
      </a>
    </nav>
  </div>
)}


      {/* Discover Menu (Visible on hover) */}
      {discoverOpen && (
        <div
          className="absolute top-20 left-0 w-full z-20 flex px-12"
          style={{ background: '#EDEBE8' }}
          onMouseEnter={() => setDiscoverOpen(true)}
          onMouseLeave={() => setDiscoverOpen(false)}
        >
          {/* Left Side - List Menu */}
          <nav className="flex flex-col items-start space-y-4 text-black w-1/5 p-6 text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
            <a
              href="#"
              className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md hover:underline hover:decoration-black"
              onClick={navigateToBodios}
            >
              Bodios
            </a>
            <a
              href="#"
              className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md hover:underline hover:decoration-black"
              onClick={navigateToAbout}
            >
              About us
            </a>
            <a
              href="#"
              className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md hover:underline hover:decoration-black"
              onClick={navigateToYakDetail}
            >
              Yak
            </a>
            <a
              href="#"
              className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md hover:underline hover:decoration-black"
              onClick={navigateToSocial}
            >
              Social Responsibility
            </a>
            <a
              href="#"
              className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md hover:underline hover:decoration-black"
              onClick={handleMenuItemClick}
            >
              Bodios People
            </a>
          </nav>


           {/* Right Side - Image Slider */}
           <div className="w-4/5">
            <div className="h-full flex justify-center items-center">
              <div className="flex space-x-4 overflow-x-auto p-6">
                <div className="cursor-pointer" onClick={navigateToBodios}>
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/7f8f5cc0c336d3a3e4a721779edfedac769a928b7db54b2a5ba455d39585c814?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                  <h3 className="mt-[10px] font-light">Bodios</h3>
                </div>

                <div className="cursor-pointer" onClick={navigateToAbout}>
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/03c2838850d74ba3e363486605acb44a1fd3c8cf6f839e931ad72c6e6d26fd51?apiKey=9804d3a088fa478e8672485264720a14&)' }}></div>
                  <h3 className="mt-[10px] font-light">About us</h3>
                </div>

                <div className="cursor-pointer" onClick={navigateToYakDetail}>
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/ef2946374d78dd117795d93c5afb3327d68f39f735697e142363cb5f7772f778?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                  <h3 className="mt-[10px] font-light">Yak</h3>
                </div>

                <div className="cursor-pointer" onClick={navigateToSocial}>
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/4a18a0c33504f9791d6e77e10ce10d994b8ac54a99c459800b8dc232fd9983fa?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                  <h3 className="mt-[10px] font-light">Social Responsibility</h3>
                </div>

                <div className="cursor-pointer" onClick={handleMenuItemClick}>
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/f1d63fded03a1907c9f7b643bfc930bd1d62dfe967494fcaf93a84677950f84f?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                  <h3 className="mt-[10px] font-light">Bodios People</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Boutique Menu (Visible on hover) */}
      {boutiqueOpen && (
        <div
          className="absolute top-20 left-0 w-full z-20 flex px-12"
          style={{ background: '#EDEBE8' }}
          onMouseEnter={() => setBoutiqueOpen(true)}
          onMouseLeave={() => setBoutiqueOpen(false)}
        >
          {/* Left Side - List Menu */}
          <nav className="flex flex-col items-start space-y-4 text-black w-1/5 p-6 text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
            <a href="#" className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md hover:underline hover:decoration-black" onClick={navigateToProductWomen}>
              Women
            </a>
            <a href="#" className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md hover:underline hover:decoration-black" onClick={navigateToProductMen}>
              Men
            </a>
            <a href="#" className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md hover:underline hover:decoration-black" onClick={navigateToYakDetail}>
              Home
            </a>
            <a href="#" className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md hover:underline hover:decoration-black" onClick={navigateToSocial}>
              Accessories
            </a>
          </nav>

          {/* Right Side - Image Slider */}
             <div className="w-4/5">
            <div className="h-full flex justify-center items-center">
              <div className="flex space-x-4 overflow-x-auto p-6">
                <div className="cursor-pointer" onClick={navigateToProductWomen}>
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/7f8f5cc0c336d3a3e4a721779edfedac769a928b7db54b2a5ba455d39585c814?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                  <h3 className="mt-[10px] font-light">Women</h3>
                </div>

                <div className="cursor-pointer" onClick={navigateToProductMen}>
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/03c2838850d74ba3e363486605acb44a1fd3c8cf6f839e931ad72c6e6d26fd51?apiKey=9804d3a088fa478e8672485264720a14&)' }}></div>
                  <h3 className="mt-[10px] font-light">Men</h3>
                </div>

                <div className="cursor-pointer" onClick={navigateToYakDetail}>
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/ef2946374d78dd117795d93c5afb3327d68f39f735697e142363cb5f7772f778?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                  <h3 className="mt-[10px] font-light">Home</h3>
                </div>

                <div className="cursor-pointer" onClick={navigateToSocial}>
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/4a18a0c33504f9791d6e77e10ce10d994b8ac54a99c459800b8dc232fd9983fa?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                  <h3 className="mt-[10px] font-light">Accessories</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
