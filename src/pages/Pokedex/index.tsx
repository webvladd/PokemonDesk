import React, { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import s from './Pokedex.module.scss';

interface PokedexPageProps {
  title?: string;
}

const PokedexPage: React.FC<PokedexPageProps> = ({ title }) => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});
  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((q) => ({
      ...q,
      name: e.target.value,
    }));
  };

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <>
      <div className={s.title}>{!isLoading && data.total}PokedexPage!!!</div>

      <div>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
      </div>

      <div className={s.pokemon_cards}>
        {!isLoading &&
          data.pokemons.map((item) => (
            <PokemonCard name={item.name} defense={item.stats.defense} attack={item.stats.attack} img={item.img} />
          ))}
      </div>
    </>
  );
};

export default PokedexPage;
