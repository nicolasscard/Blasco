
/* GOOGLE PLACES */

export const API_KEY = 'AIzaSyCeDbZJA_VW-WZZu7NCHgHnNUnm5erHHwI';   // API key de google place
export const PLACE_ID = 'ChIJmZ0SGwEHfpYRxEHb3aIaO3E';  // place id de la tienda

export const baseURL = 'https://maps.googleapis.com/maps/api/place';    //Google maps place baseURL
export const detailsURL = '/details/json';    //get details of the place [params: ?place_id=ChIJmZ0SGwEHfpYRxEHb3aIaO3E&fields=photos&key=AIzaSyCeDbZJA_VW-WZZu7NCHgHnNUnm5erHHwI]
export const photoURL = '/photo';    // get a specifict photo of the place [params: ?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${apiKey}]

/* Using statics url images
const googleMapsImageUrl = 'https://lh5.googleusercontent.com/p/';
const arrayImages = [
    'AF1QipOhHOSB6tRn6AiJuHRfHgoaYVpK9alzx06XQEA',
    'AF1QipPmKjznEMNf-uOJXCsDFxmPmVLz12FkUe6miaQ',
    'AF1QipNTQalP4GBf6sGkKoLyw4bMrnM6krnIn0XTu90',
];
*/
