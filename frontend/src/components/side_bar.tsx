import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  not_logged_in_menu_links,
  logged_in_menu_links,
} from 'data/menu_links';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Logo from 'images/logo.svg';

export const SideBar = () => {
  const [is_logged_in] = useState(false);
  const is_dark_mode_default = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const pageClasses = document.documentElement.classList;

  const getLinksToDisplay = () => {
    if (!is_logged_in) {
      return not_logged_in_menu_links;
    } else {
      return logged_in_menu_links;
    }
  };

  useEffect(() => {
    is_dark_mode_default && pageClasses.add('dark');
  });

  const togglePageTheme = () => {
    pageClasses.toggle('dark');
  };

  return (
    <nav className='fixed flex flex-col gap-8 group p-2 md:p-4 bg-azul-900 h-screen w-fit'>
      <ul className='flex flex-col gap-4'>
        <Link to={'/'}>
          <img
            src={Logo}
            alt='letra P encostada na letra B, representando as iniciais do nome Pachecos Bank'
            className='w-12'
          />
        </Link>
        <SunIcon
          onClick={togglePageTheme}
          className='w-12 px-1 text-rosa-100 hidden dark:block cursor-pointer'
        />
        <MoonIcon
          onClick={togglePageTheme}
          className='w-12 px-1 text-rosa-100 block dark:hidden cursor-pointer'
        />
        {getLinksToDisplay().map(value => (
          <Link key={value.id} to={value.to} className='hover:drop-shadow-lg'>
            <li className='flex items-center justify-center gap-2 cursor-pointer'>
              <value.icon className='w-12 text-rosa-100' />
              <span className='hidden lg:group-hover:block font-default text-rosa-100 text-2xl uppercase'>
                {value.label}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
