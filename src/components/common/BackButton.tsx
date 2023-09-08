import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemeContext } from '../../context/themeContext/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BackButton = () => {
    const navigation = useNavigation();
    const { theme} = useContext( ThemeContext );

    return (
        <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Ionicons
              size={20} 
              name='chevron-back' 
              style={{ color: theme.colors.blackPrimary }} 
            />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    content: {
        position: 'absolute', 
        top: 50,
        left: 50,
    },
    button: {
        width: 40, 
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
});

export default BackButton;