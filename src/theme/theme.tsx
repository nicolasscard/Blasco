import { Platform, StyleSheet } from 'react-native';
import { ThemeState } from '../interfaces/themeState';

export const themeStyles = (theme: ThemeState) => StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    input: {
        borderWidth: 1,
        borderColor: theme.colors.brown,
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        fontFamily: theme.fonts.IndieFlower,
        fontSize: 20
    }
});

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0, 0.6)',
    colors: {
        primary: '#FEE490',     // yellow
        darkPrimary: '#FFC802',   // dark yellow
        blackPrimary: '#ECB53E',   // black yellow (naranja)
        secondary: '#385A64',   // verde Petroleo
        darkSecondary: '#2A454E',   // verde petroleo oscuro
        blackSecondary: 'none',   // black yellow (naranja)
        tertiary: '#8B66F6',   // violet
        darkTertiary: '#755AE7',   // dark violet
        
        // icons
        black: '#1a1a1a',
        white: '#e5e5e4',
        yellow: '#FEE490',
        darkYellow: '#FFC802',
        blackYellow: '#ECB53E',
        oilGreen: '#385A64',
        darkOilGreen: '#2A454E',
        lightGray: '#DCDCDC',
        grey: '#9390A0',
        lightRed: '#fd8168',
        red: '#FC5D3D',
        darkRed: '#E46A58',
        brown: '#A67B5B',
        darkBrown: '#6E5002',
        lightBlue: '#a7d8f1',
        blue: '#72C2E9',
        lightGreen: '#82D0C4',  // water green
        lightYellow: '#FEF7DD', // amarillo agua 1
        lightYellow2: '#FFECAF',   // amarillo Agua 2
        violet: '#8B66F6',
        darkViolet: '#755AE7',
        skyBlue: '#B8DFDC', // celeste burbujas

        // black and white colors
        greyBrown: '#7F7F7F',
        greyDarkYellow: '#999999',
        greyDarkBrown: '#676767',
        greyBlue: '#B4B4B4',
        greyLight: '#D8D8D8',
        greyYellow: '#989898',
        greyRed: '#878787',
        greyGrey: '#7D7D79',

        // app
        background: '#FFFFE6',
        // background: 'white',
        card: '#FAE49B',
        text: '#6E5002', // '#84571B', otro brown
        border: '#755AE7',
        notification: '#755AE7',
    },
    fonts: {
        IndieFlower: Platform.OS === 'ios' ? 'IndieFlower' : 'IndieFlower-Regular',
        Mogra: Platform.OS === 'ios' ? 'Mogra' : 'Mogra-Regular',
    },
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(255,255,255, 0.6)',
    colors: {
        primary: '#385A64',     // verde petroleo
        darkPrimary: '#2A454E',   // verde petroleo oscuro
        blackPrimary: 'none',   // 
        secondary: '#FEE490',   // yellow
        darkSecondary: '#FFC802',   // dark yellow (light orange)
        blackSecondary: '#F5B401',   // black yellow (orange)
        tertiary: '#8B66F6',   // violet
        darkTertiary: '#755AE7',   // dark violet

        // icons
        black: '#1a1a1a',
        white: '#e5e5e4',
        yellow: '#FEE490',
        darkYellow: '#FFC802',
        blackYellow: '#ECB53E',
        oilGreen: '#385A64',
        darkOilGreen: '#2A454E',
        lightGray: '#FFECAF',   // amarillo Agua 2
        grey: '#9390A0',
        lightRed: '#fd8168',
        red: '#FC5D3D',
        darkRed: '#E46A58',
        brown: '#A67B5B',
        darkBrown: '#8A5F42',
        lightBlue: '#a7d8f1',
        blue: '#72C2E9',
        lightGreen: '#82D0C4',  // water green
        lightYellow: '#FEF7DD', // amarillo agua 1
        lightYellow2: '#FFECAF',   // amarillo Agua 2
        violet: '#8B66F6',
        darkViolet: '#755AE7',
        skyBlue: '#B8DFDC', // celeste burbujas

        // black and white colors
        greyBrown: '#7F7F7F',
        greyDarkYellow: '#999999',
        greyDarkBrown: '#676767',
        greyBlue: '#B4B4B4',
        greyLight: '#D8D8D8',
        greyYellow: '#989898',
        greyRed: '#878787',
        greyGrey: '#7D7D79',

        // app
        background: 'black', //'#755AE7', // '#666666',
        card: '#FEE490',
        text: '#385A64',    // verde petroleo oscuro
        border: '#755AE7',
        notification: '#755AE7',
    },
    fonts: {
        IndieFlower: Platform.OS === 'ios' ? 'IndieFlower' : 'IndieFlower-Regular',
        Mogra: Platform.OS === 'ios' ? 'Mogra' : 'Mogra-Regular',
    },
}