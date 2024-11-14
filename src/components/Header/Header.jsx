import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu
  const [discoverOpen, setDiscoverOpen] = useState(false); // For the Discover dropdown menu

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle Discover Dropdown
  const toggleDiscoverMenu = (e) => {
    e.stopPropagation(); // Prevent this click from triggering the mobile menu
    setDiscoverOpen(!discoverOpen);
  };

  return (
    <header className="w-full h-20 bg-black bg-opacity-10 absolute">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center w-full max-w-[1800px] mx-auto h-full">
        
        {/* Left Links */}
        <nav className="flex space-x-6 font-light text-white text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
          <a
            href="#"
            className="hover:text-gray-300 transition-colors"
            onClick={toggleDiscoverMenu} // Toggle Discover menu on click
          >
            Discover
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">Boutique</a>
        </nav>
        
        {/* Center Title */}
        <h1 className="text-white text-xl font-semibold tracking-wide font-thin">BODIOS YAK DOWN</h1>
        
        {/* Right Links */}
        <div className="flex space-x-6 font-light text-white text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
          <a href="#" className="hover:text-gray-300 transition-colors">Search</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Cart (0)</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Login</a>
        </div>
      </div>

      {/* Discover Menu (Visible on click) */}
      {discoverOpen && (
        <div className="absolute top-20 left-0 w-full z-20 flex px-7" style={{background:"#EDEBE8"}}>
          {/* Left Side - List Menu */}
          <nav className="flex flex-col items-start space-y-4 text-black w-1/5 p-6 text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
            <a href="#" className="hover:text-gray-400 transition-colors">Bodios</a>
            <a href="#" className="hover:text-gray-400 transition-colors">About us</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Yak</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Social Responsibity</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Bodios People</a>
          </nav>
          
          {/* Right Side - Image Slider */}
          <div className="w-4/5">
            <div className="h-full flex justify-center items-center">
              <div className="flex space-x-4 overflow-x-auto p-6">
                <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/7f8f5cc0c336d3a3e4a721779edfedac769a928b7db54b2a5ba455d39585c814?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                {/* Demo Image 2 */}
                <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/97e4fc66280e26949402abfb458b653bcf395e42751c18bc0cc6794077e11f4e?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                {/* Demo Image 3 */}
                <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/4a18a0c33504f9791d6e77e10ce10d994b8ac54a99c459800b8dc232fd9983fa?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                {/* Demo Image 4 */}
                <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/ef2946374d78dd117795d93c5afb3327d68f39f735697e142363cb5f7772f778?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/7f8f5cc0c336d3a3e4a721779edfedac769a928b7db54b2a5ba455d39585c814?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                {/* Demo Image 2 */}
                <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/97e4fc66280e26949402abfb458b653bcf395e42751c18bc0cc6794077e11f4e?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                {/* Demo Image 3 */}
                <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/4a18a0c33504f9791d6e77e10ce10d994b8ac54a99c459800b8dc232fd9983fa?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>
                {/* Demo Image 4 */}
                <div className="flex-shrink-0 w-[375px] h-[470px] lg:w-[375px] lg:h-[470px] md:w-[300px] md:h-[400px] sm:w-[250px] sm:h-[330px] bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/ef2946374d78dd117795d93c5afb3327d68f39f735697e142363cb5f7772f778?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1)' }}></div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-5 py-4 bg-black bg-opacity-50">
        <button
          onClick={toggleMobileMenu} // Only toggle mobile menu here
          className="text-white text-2xl focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
        <h1 className="text-white text-lg font-semibold text-center flex-grow tracking-wide">BODIOS YAK DOWN</h1>
      </div>

      {/* Mobile Menu Overlay */}
      <Transition
        as="div"
        show={menuOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center"
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-5 right-5 text-white text-3xl focus:outline-none"
          aria-label="Close mobile menu"
        >
          ✕
        </button>
        <nav className="flex flex-col items-center space-y-6 text-white text-xl font-medium">
          <a href="#" className="hover:text-gray-400 transition-colors">Discover</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Boutique</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Search</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Cart (0)</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Login</a>
        </nav>
      </Transition>
    </header>
  );
};

export default Header;
