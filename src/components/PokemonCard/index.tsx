import React from 'react';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  name?: string;
  defense?: number;
  attack?: number;
  img?: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, defense, attack, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <div className={s.titleName}>{name}</div>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>Fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt="Charmander" />
      </div>
    </div>
  );
};

export default PokemonCard;
