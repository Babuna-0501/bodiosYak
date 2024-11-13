import React from 'react';
import MenuItem from './MenuItem';
import Logo from './Logo';

const menuItems = [
  { label: 'Discover', width: '77' },
  { label: 'Boutique', width: '79' },
];

const rightMenuItems = [
  { label: 'Search', width: '62' },
  { label: 'Cart (0)', width: '66' },
  { label: 'Login', width: '49' },
];

function Header() {
  return (
    <header className="flex items-center px-16 py-6 text-lg leading-none text-center text-white bg-black bg-opacity-10 absolute w-full">
      <nav className="flex justify-between items-center self-stretch w-full">
        <div className="flex gap-5 items-center">
          {menuItems.map((item, index) => (
            <MenuItem key={index} label={item.label} width={item.width} />
          ))}
        </div>
        <Logo />
        <div className="flex gap-8 items-center">
          {rightMenuItems.map((item, index) => (
            <MenuItem key={index} label={item.label} width={item.width} />
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
