import { useState } from 'react'

import { googleMapsPlaceRequest } from '../APIs/googleMaps'
import { GMPhotos, Photo } from '../interfaces/gmPhotos';
import { API_KEY, PLACE_ID, detailsURL } from '../constants/googlePlaces';

export const useGooglePlaces = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ photos, setPhotos ] = useState<Photo[]>([]);

    const loadPhotos = async () => {
        setIsLoading(true);
        
        const resp = await googleMapsPlaceRequest.get<GMPhotos>(detailsURL, {
          params: {
            place_id: PLACE_ID,
            fields: 'photos',
            key: API_KEY,
          }
        });
        // console.log('resp', resp)
        const photos = resp.data.result.photos;
        setPhotos(photos);
        setIsLoading(false);
    };
    
  return ({
    isLoading,
    photos,
    loadPhotos,
  });
}
