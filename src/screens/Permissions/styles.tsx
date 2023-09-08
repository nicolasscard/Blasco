import { StyleSheet } from "react-native";
import { ThemeState } from "../../interfaces/themeState";

export const contactStyles = (theme: ThemeState) => {
    const { colors, fonts } = theme;

    return (
        StyleSheet.create({
            fadeImage: {
                width: '100%', 
                height: 300, 
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                backgroundColor: colors.background
              },
              title: {
                  fontWeight: 'bold',
                  fontSize: 25,
                  marginTop: 10,
                  marginBottom: 5,
                  fontFamily: fonts.Mogra, 
                  color: colors.darkBrown,
              },
              description: {
                  fontSize: 20,
                  marginBottom: 5,
                  fontFamily: fonts.IndieFlower, 
                  marginHorizontal: 20, 
                  textAlign: 'justify', 
                  color: colors.oilGreen,
              },
        })
    );
}
