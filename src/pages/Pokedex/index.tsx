import React, { useEffect, useState } from 'react';

import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';

interface PokedexPageProps {
  title?: string;
}

interface IStats {
  attack: number;
  defense: number;
  hp: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

interface IPokemon {
  abilities: string[];
  baseExperience: number;
  height: number;
  id: number;
  img: string;
  isDefault: boolean;
  name: string;
  nameClean: string;
  order: number;
  stats: IStats;
  types: string[];
  weight: number;
}

interface IPokemonsData {
  // count: number;
  // limit: number;
  // offset: number;
  pokemons: IPokemon[];
  total: number;
}

interface IUsePokemons {
  data: IPokemonsData;
  isLoading: boolean;
  isError: boolean;
}

const usePokemons = (): IUsePokemons => {
  const [data, setData] = useState({ pokemons: [], total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage: React.FC<PokedexPageProps> = ({ title }) => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <>
      <div className={s.title}>{data.total}PokedexPage!!!</div>

      <div className={s.pokemon_cards}>
        {data.pokemons.map((item) => (
          <PokemonCard name={item.name} defense={item.stats.defense} attack={item.stats.attack} img={item.img} />
        ))}
      </div>
    </>
  );
};

export default PokedexPage;
