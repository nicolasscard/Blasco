import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeState } from '../../interfaces/themeState';
import { ThemeContext } from '../../context/themeContext/ThemeContext';

interface Props {
    title: string;
    description: string;
};

const Card = ({ title, description }: Props) => {
    const { theme} = useContext( ThemeContext );
    const styles = cardStyles(theme);

    return (
        <View style={styles.content}>
            {title &&
                <Text style={styles.title}>
                    {title}
                </Text>
            }
            {description &&
                <Text style={styles.description}>
                    {description}
                </Text>
            }
        </View>
    );
}

const cardStyles = (theme: ThemeState) => {
    const { colors, fonts } = theme;
    return (
        StyleSheet.create({
            content: {
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 25,
                flex: 1,
                position: 'absolute',
                bottom: 20,
                left: 20,
                backgroundColor: colors.background,
            },
            title: {
                fontSize: 15,
                fontFamily: fonts.Mogra,
                color: colors.oilGreen,
            },
            description: {
                fontSize: 15,
                fontFamily: fonts.Mogra,
                color: colors.brown,
            },
        })
    );
};

export default Card;
