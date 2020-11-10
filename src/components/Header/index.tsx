import React from 'react';
import { A, usePath } from 'hookrouter';

import cn from 'classnames';
import s from './Header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import { GENERAL_MENU } from '../../routes';

// interface IMenu {
//   id: number;
//   value: string;
//   link: string;
// }
//
// const MENU: IMenu[] = [
//   {
//     id: 1,
//     value: 'Home',
//     link: '/',
//   },
//   {
//     id: 2,
//     value: 'Pokédex',
//     link: '/pokedex',
//   },
//   {
//     id: 3,
//     value: 'Legendaries',
//     link: '#',
//   },
//   {
//     id: 4,
//     value: 'Documentation',
//     link: '#',
//   },
// ];

const Header = () => {
  const path = usePath();
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>

        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              key={title}
              href={link}
              // className={s.menuLink}
              className={cn(s.menuLink, {
                [s.activeLink]: link === path,
              })}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
