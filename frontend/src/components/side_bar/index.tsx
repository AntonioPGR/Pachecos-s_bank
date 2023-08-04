// ASSETS
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Logo from 'images/logo.svg';
// DATA
import {
  not_logged_in_menu_links,
  logged_in_menu_links,
} from 'data/menu_links';
// REACT
import { useEffect } from 'react';
// RECOIL
import { useRecoilValue } from 'recoil';
// ROUTER
import { Link } from 'react-router-dom';
import { state_is_logged_in } from 'recoil/state_is_logged_in';

export const SideBar = () => {
  const is_logged_in = useRecoilValue(state_is_logged_in);
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
  }, []);

  const togglePageTheme = () => {
    pageClasses.toggle('dark');
  };

  return (
    <nav className='flex max-sm:justify-between items-center group p-2 bg-azul-900 w-full sm:flex-col sm:gap-4 sm:fixed sm:h-screen sm:w-fit md:p-4'>
      <nav className='flex sm:flex-col items-center sm:items-start gap-2 w-full'>
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
      </nav>

      <ul className='flex sm:flex-col  items-center sm:items-start gap-2'>
        {getLinksToDisplay().map(value => (
          <Link key={value.id} to={value.to} className='hover:drop-shadow-lg'>
            <li
              data-testid='menu_link'
              className='flex items-center justify-center gap-2 cursor-pointer'
            >
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
