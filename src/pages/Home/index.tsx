import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <div>
        <Button onClick={() => {}}>See pokemons</Button>
      </div>

      <div>
        <Parallax />
      </div>
    </div>
  );
};

export default HomePage;
