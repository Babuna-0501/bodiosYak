import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDiscoverMenu = (e) => {
    e.stopPropagation(); 
    setDiscoverOpen(!discoverOpen);
  };

  const navigateToBodios = () => {
    navigate('/bodios'); 
    setDiscoverOpen(false); // Close the menu after navigating
  };

  const navigateToAbout = () => {
    navigate('/about'); 
    setDiscoverOpen(false); // Close the menu after navigating
  };

  const navigateToHome = () => {
    navigate('/'); 
    setDiscoverOpen(false); // Close the menu after navigating
  };

  const handleMenuItemClick = () => {
    setDiscoverOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <header className="w-full h-20 bg-black bg-opacity-10 absolute max-w-[1920px] mx-auto transition-colors hover:bg-[#EDEBE8] group">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center w-full max-w-[1800px] mx-auto h-full">
        
        {/* Left Links */}
        <nav className="flex space-x-6 font-light text-white text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
          <a
            href="#"
            className="hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md group-hover:text-black"
            onClick={toggleDiscoverMenu} 
          >
            Discover
          </a>
          <a href="#" className="hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md group-hover:text-black">Boutique</a>
        </nav>
        
        {/* Center Title */}
        <h1
          onClick={navigateToHome} 
          className="text-white text-xl font-semibold tracking-wide font-thin cursor-pointer group-hover:hidden"
        >
          BODIOS YAK DOWN
        </h1>
        
        {/* Center Title Image (on hover) */}
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b579b0acb0e565e43c6894a52d0889061ba28b8ee4f4cf227acb566a436cddbe?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1" 
            alt="Center Title" 
            className="w-auto h-14 w-[200px] m-auto hidden group-hover:block cursor-pointer" 
            onClick={navigateToHome}
          />
        
        {/* Right Links */}
        <div className="flex space-x-6 font-light text-white text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
          <a href="#" className="hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md group-hover:text-black">Search</a>
          <a href="#" className="hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md group-hover:text-black">Cart (0)</a>
          <a href="#" className="hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md group-hover:text-black">Login</a>
        </div>
      </div>

      {/* Discover Menu (Visible on click) */}
      {discoverOpen && (
        <div className="absolute top-20 left-0 w-full z-20 flex px-7" style={{background:"#EDEBE8"}}>
          {/* Left Side - List Menu */}
          <nav className="flex flex-col items-start space-y-4 text-black w-1/5 p-6 text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
            <a href="#" className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md group-hover:text-black" onClick={handleMenuItemClick}>Bodios</a>
            <a href="#" className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md group-hover:text-black" onClick={handleMenuItemClick}>About us</a>
            <a href="#" className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md group-hover:text-black" onClick={handleMenuItemClick}>Yak</a>
            <a href="#" className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md group-hover:text-black" onClick={handleMenuItemClick}>Social Responsibility</a>
            <a href="#" className="hover:text-gray-400 hover:bg-[#EDEBE8] transition-colors px-4 py-2 rounded-md group-hover:text-black" onClick={handleMenuItemClick}>Bodios People</a>
          </nav>
          
          {/* Right Side - Image Slider */}
          <div className="w-4/5">
            <div className="h-full flex justify-center items-center">
              <div className="flex space-x-4 overflow-x-auto p-6">
                <div className='cursor-pointer' onClick={navigateToBodios}> 
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/7f8f5cc0c336d3a3e4a721779edfedac769a928b7db54b2a5ba455d39585c814?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                  <h3 className='mt-[10px] font-light'>Bodios</h3>
                </div>

                <div className='cursor-pointer' onClick={navigateToAbout}>
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/97e4fc66280e26949402abfb458b653bcf395e42751c18bc0cc6794077e11f4?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                  <h3 className='mt-[10px] font-light'>About us</h3>
                </div>

                <div className='cursor-pointer' onClick={handleMenuItemClick}>
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/ef2946374d78dd117795d93c5afb3327d68f39f735697e142363cb5f7772f778?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                  <h3 className='mt-[10px] font-light'>Yak</h3>
                </div>

                <div className='cursor-pointer' onClick={handleMenuItemClick}>
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/4a18a0c33504f9791d6e77e10ce10d994b8ac54a99c459800b8dc232fd9983fa?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                  <h3 className='mt-[10px] font-light'>Social Responsibility</h3>
                </div>

                <div className='cursor-pointer' onClick={handleMenuItemClick}>
                  <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/f1d63fded03a1907c9f7b643bfc930bd1d62dfe967494fcaf93a84677950f84f?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                  <h3 className='mt-[10px] font-light'>Bodios People</h3>
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
