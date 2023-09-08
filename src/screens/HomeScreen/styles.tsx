import { Dimensions, StyleSheet, Platform } from "react-native";
import { ThemeState } from "../../interfaces/themeState";

const { width, height } = Dimensions.get('window');

export const homeStyles = (theme: ThemeState) => StyleSheet.create({
    content: {
        flex: 1,
        // alignItems: 'stretch',
        // justifyContent: 'flex-end',
        backgroundColor: theme.colors.background,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // backgroundColor: 'blue'
    },
    card: {
        backgroundColor: theme.colors.card,
        borderRadius: 20,
        width: width/4, 
        height: width/4,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    cardTitle: {
        fontSize: 20,
        color: theme.colors.text,
        fontFamily: theme.fonts.IndieFlower,
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        justifyContent: 'center',
        color: theme.colors.text,
        fontFamily: theme.fonts.Mogra,
    },
    subTitle: {
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
        color: theme.colors.text,
        fontFamily: theme.fonts.IndieFlower,
    },
});