import React, { useEffect, useState } from 'react';

interface PokedexPageProps {
  title?: string;
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
  stats: string;
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
      <div>{data.total}PokedexPage!!!</div>
      <div>
        {data.pokemons.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    </>
  );
};

export default PokedexPage;
