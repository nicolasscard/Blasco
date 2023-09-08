import { Theme } from "@react-navigation/native";

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string;
    colors: {
        primary: string;
        darkPrimary: string;
        blackPrimary: string;
        secondary: string;
        darkSecondary: string;
        blackSecondary: string;
        tertiary: string;
        darkTertiary: string;
        
        // icons
        black: string,
        white: string,
        yellow: string,
        darkYellow: string,
        blackYellow: string,
        oilGreen: string,
        darkOilGreen: string,
        lightGray: string,
        grey: string,
        lightRed: string,
        red: string,
        darkRed: string,
        brown: string,
        darkBrown: string,
        lightBlue: string,
        greyLight: string,
        blue: string,
        lightGreen: string,
        lightYellow: string,
        lightYellow2: string,
        violet: string,
        darkViolet: string,
        skyBlue: string,

        // black and white colors
        greyBrown: string,
        greyDarkYellow: string,
        greyDarkBrown: string,
        greyBlue: string,
        greyYellow: string,
        greyRed: string,
        greyGrey: string,

        // app
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    },
    fonts: {
        IndieFlower: string,
        Mogra: string,
    },
}
