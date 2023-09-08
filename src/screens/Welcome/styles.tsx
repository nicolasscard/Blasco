import { Dimensions, StyleSheet, Platform } from "react-native";
import { ThemeState } from "../../interfaces/themeState";

const { width, height } = Dimensions.get('window');

export const welcomeStyles = (theme: ThemeState) => StyleSheet.create({
    content: {
        flex: 1,
        padding: 20,
        backgroundColor: theme.colors.background,
    },
    label: {
        marginTop: 20,
        fontFamily: theme.fonts.Mogra,
        fontSize: 18,
        color: theme.colors.brown
    },
    card: {
        alignItems: 'center',
        backgroundColor: theme.colors.card,
        width: 100,
        height: 140,
        marginRight: 20,
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        borderBottomEndRadius: 40,
        borderBottomLeftRadius: 40,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
    },
    cardText: {
        textAlign: 'center',
        color: 'red',
    }
});