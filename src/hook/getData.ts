import { useEffect, useState } from 'react';
import req from '../utils/request';

// interface PokedexPageProps {
// 	title?: string;
// }

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

const useData = (endpoint: string): IUsePokemons => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req(endpoint);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
