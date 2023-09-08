import React, { useContext, useEffect, useRef } from 'react';
import { View, Linking, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackScreenProps } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

import { Location } from '../assets/svg/index';
import { mapStyle } from '../constants/googleMaps/mapStyle';
import { initialRegion, urlWithDestination } from '../constants/googleMaps/region';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { PermissionsContext } from '../context/PermissionsContext';
import { TopTapParams } from '../routes/TopTabNavigator';
import { StackParams } from '../routes/RootStackNavigator';

const windowWidth = Dimensions.get('window').width;
const coordinates = {
  latitude: initialRegion.latitude,
  longitude: initialRegion.longitude,
}

interface Props extends StackScreenProps<TopTapParams & StackParams, 'Location'>{};

const LocationScreen = ({ route, navigation }: Props) => {
  const { theme } = useContext( ThemeContext );
  const { permissions, checkLocationPermission } = useContext( PermissionsContext );
  const mapViewRef = useRef<MapView>(null);

  const goToGoogleMaps = () => {
    Linking.openURL(urlWithDestination);
  };

  // Función para centrar el mapa en el marcador y aplicar zoom
  const focusMapOnMarker = async () => {
    if (mapViewRef.current) {
      const newRegion = {
        ...coordinates,
        latitudeDelta: 0.005, // Latitud del área visible (zoom)
        longitudeDelta: 0.005, // Longitud del área visible (zoom)
      };
      mapViewRef.current.animateToRegion(newRegion, 1000); // 1000ms de duración de la animación
    }
  };

  useEffect(() => {
    // console.log('permissions');
    // console.log(permissions);
    // navigation.navigate('Permissions');
    if (permissions.locationStatus !== 'granted') {
      navigation.navigate('Permissions');
    }
  }, []);
  

  useFocusEffect(() => {
    focusMapOnMarker();
  });  

  return (
    <View style={{ flex: 1 }}>
        <MapView
          ref={mapViewRef}
          provider='google'
          style={{ flex: 1 }}
          initialRegion={initialRegion}
          customMapStyle={mapStyle}
        >
          <Marker
            title='Blasco'
            description='Estética Canina'
            coordinate={coordinates}
          >
            <Location width={50} height={50} />
          </Marker>
        </MapView>

        <TouchableOpacity
            onPress={goToGoogleMaps}
            style={{...styles.button, backgroundColor: theme.colors.blackPrimary}}
            activeOpacity={ 0.6 }
        >
          <View style={{ position: 'absolute' }}>
            <Icon
                name="directions"
                color="white"
                size={ 40 }
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={focusMapOnMarker}
            style={{...styles.button, top: windowWidth * 0.35, backgroundColor: theme.colors.blackPrimary}}
            activeOpacity={ 0.6 }
        >
          <View style={{ position: 'absolute' }}>
            <Location width={40} height={40} />
          </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: windowWidth * 0.15,
      height: windowWidth * 0.15,
      borderRadius: windowWidth * 0.075,
      top: windowWidth * 0.15,
      right: windowWidth * 0.1,
      position: 'absolute',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
});

export default LocationScreen;