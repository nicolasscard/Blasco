import { useState } from 'react';

import {  } from '../APIs/googleMaps'
import { breedsURL } from '../constants/dogs';
import { dogRequest } from '../APIs/dogs';
import { DogBreedRequest } from '../interfaces/dogs';

export const useDogs = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ breeds, setBreeds ] = useState<DogBreedRequest[]>([]);

  const loadBreeds = async () => {
      setIsLoading(true);
      
      const resp = await dogRequest.get<DogBreedRequest[]>(breedsURL);
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
