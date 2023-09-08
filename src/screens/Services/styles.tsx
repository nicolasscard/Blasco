import { StyleSheet } from "react-native";
import { ThemeState } from "../../interfaces/themeState";

export const servicesStyles = (theme: ThemeState) => StyleSheet.create({
    image: {
        width: '100%',
        height: '85%',
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 25,
    },
    title: {
        fontSize: 30,
        fontFamily: theme.fonts.Mogra,
        color: theme.colors.blackPrimary,
        marginBottom: 5,
    },
    subTitle: {
        textAlign: "justify",
        fontSize: 20,
        fontFamily: theme.fonts.IndieFlower,
        color: theme.colors.blackPrimary,
    },
    pagerView: {
      flex: 1,
      backgroundColor: 'black'
    },
    paginationDot: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: 'black'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: theme.colors.grey,
    },
    activeDot: {
        backgroundColor: theme.colors.blackPrimary,
    },
    backButton: {
        width: 40, 
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    backButtonContainer: {
        position: 'absolute', 
        top: 50,
        left: 50,
    }
});