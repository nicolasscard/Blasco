import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { ThemeContext } from '../../context/themeContext/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeState } from '../../interfaces/themeState';

interface Props {
    iconName: string;
    onPress: () => void;
    text: string;
};

const PrimaryButton = ({ iconName, onPress, text }: Props) => {
    const { theme} = useContext( ThemeContext );
    const styles = componentStyles(theme);

    return (
        <TouchableOpacity style={styles.content} onPress={onPress}>
          <Icon 
            name={iconName} 
            size={30} 
            color={theme.colors.darkBrown}  
            style={{ marginRight: 5 }} 
          />
          <Text style={styles.text}>
            {text}
          </Text>
        </TouchableOpacity>  
    );
}

const componentStyles = (theme: ThemeState) => {
    const { colors, fonts } = theme;
    return (
        StyleSheet.create({
            content: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 250,
                borderRadius: 50,
                marginTop: 20,
                alignSelf: 'center',
                backgroundColor: colors.primary,

                shadowColor: "#000",
                shadowOffset: {
                width: 0,
                height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
        
                elevation: 3,
            },
            text: {
                fontSize: 20,
                marginTop: 5,
                color: colors.darkBrown, 
                fontFamily: fonts.IndieFlower,
            },
        })
    );
};

export default PrimaryButton;
