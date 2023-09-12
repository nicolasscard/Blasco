import { useState } from 'react';

import {  } from '../APIs/googleMaps'
import { breedsURL } from '../constants/dogs';
import { dogRequest } from '../APIs/dogs';
import { Breed } from '../interfaces/dogs';

export const useDogs = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ breeds, setBreeds ] = useState<Breed[]>([]);

  const loadBreeds = async () => {
      setIsLoading(true);
      
      const resp = await dogRequest.get<Breed[]>(breedsURL);
      const breedsList = resp.data;

      setBreeds(breedsList);
      setIsLoading(false);
  };
    
  return ({
    isLoading,
    breeds,
    loadBreeds,
  });
}
