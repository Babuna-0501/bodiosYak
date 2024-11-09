import React from 'react';
import MenuItem from './MenuItem';
import Logo from './Logo';

const menuItems = [
  { label: 'Discover', width: '77px' },
  { label: 'Boutique', width: '79px' },
];

const rightMenuItems = [
  { label: 'Search', width: '62px' },
  { label: 'Cart (0)', width: '66px' },
  { label: 'Login', width: '49px' },
];

function Header() {
  return (
    <header className="flex overflow-hidden justify-between items-center px-16 py-6 text-lg leading-none text-center text-white bg-black bg-opacity-10 max-md:px-5">
      <nav className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex gap-5 items-center self-stretch my-auto tracking-normal whitespace-nowrap min-w-[240px] w-[400px]">
          {menuItems.map((item, index) => (
            <MenuItem key={index} label={item.label} width={item.width} />
          ))}
        </div>
        <Logo />
        <div className="flex gap-8 items-start self-stretch my-auto tracking-normal min-w-[240px] w-[400px]">
          {rightMenuItems.map((item, index) => (
            <MenuItem key={index} label={item.label} width={item.width} />
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;