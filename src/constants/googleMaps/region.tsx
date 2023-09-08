export const initialRegion = {
    latitude: -32.8353298,
    longitude: -68.8669544,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};
export const urlWithDestination = `https://www.google.com/maps/dir/?api=1&destination=${initialRegion.latitude},${initialRegion.longitude}`;
export const url = `https://www.google.com/maps/search/?api=1&query=${initialRegion.latitude},${initialRegion.longitude}`;