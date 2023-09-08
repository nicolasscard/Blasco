import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useGooglePlaces } from '../hooks/useGooglePlaces';
import { Photo } from '../interfaces/place';
import { API_KEY, baseURL, photoURL } from '../constants/googlePlaces';
import { FadeInImage } from '../components';

const AlbumsScreen = () => {
    const { isLoading, loadPhotos, photos } = useGooglePlaces();

    useEffect(() => {
        loadPhotos();
    }, []);
    
    const renderItem = (photo: Photo) => {
        const url = baseURL + photoURL + '?maxwidth=800&photoreference=' + photo.photo_reference + '&key=' + API_KEY;
        return (
            <FadeInImage 
                source={{ uri: url }}
                style={{ width: '100%', height: 400 }}
            />
        );
    };
        
    return (
        <View style={{ flex: 1 }}>
            {photos.length > 0 &&
                <FlatList
                    data={photos}
                    renderItem={({item}) => renderItem(item)}
                    keyExtractor={(item) => item.photo_reference.toString()}
                    refreshing={isLoading}
                />
            }
        </View>
    );
}

export default AlbumsScreen;
