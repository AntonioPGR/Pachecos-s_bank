import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  not_logged_in_menu_links,
  logged_in_menu_links,
} from 'data/menu_links';

export const SideBar = () => {
  const IsLoggedIn = useState(false);

  const getLinksToDisplay = () => {
    if (!IsLoggedIn) {
      return not_logged_in_menu_links;
    } else {
      return logged_in_menu_links;
    }
  };

  const renderLinks = () => {
    let links_to_display = getLinksToDisplay();
    return links_to_display.map(value => (
      <Link key={value.id} to={value.to}>
        <li className='flex items-center justify-center gap-2 cursor-pointer'>
          <img
            className='w-12 h-auto'
            src={value.icon}
            alt='Porta aberta com seta indicando a entrada. Simboliza o login para o usuário'
          />
          <span className='hidden group-hover:block font-mono text-pink-500 font-bold text-2xl uppercase'>
            {value.label}
          </span>
        </li>
      </Link>
    ));
  };

  return (
    <nav className='group p-4 bg-blue-950 h-screen w-20 hover:w-fit'>
      <ul className='sidebar'>{renderLinks()}</ul>
    </nav>
  );
};
