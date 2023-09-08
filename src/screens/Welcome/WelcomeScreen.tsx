import React, { useContext, useEffect, useState } from 'react';
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {Picker} from '@react-native-picker/picker';
import { themeStyles } from '../../theme/theme';
import { useDogs } from '../../hooks/useDogs';
import { StyleSheet } from 'react-native';
import { useForm } from '../../hooks/useForm';
import { DogBreedRequest } from '../../interfaces/dogs';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParams } from '../../routes/RootStackNavigator';
import { FadeInImage } from '../../components';
import { ThemeContext } from '../../context/themeContext/ThemeContext';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { welcomeStyles } from './styles';

interface Props extends StackScreenProps<StackParams, 'Welcome'>{};
interface Pet {
    name: string,
    age: number,
    breed: string,
};
const WelcomeScreen = ({ route, navigation }: Props) => {
    const navigator = useNavigation();
    const { theme } = useContext( ThemeContext );
    const styles = welcomeStyles(theme);
    const themeStyle = themeStyles(theme);
    const { breeds, isLoading, loadBreeds } = useDogs();
    const { form, onChange } = useForm<Pet>({ name: '', breed: '', age: 0 });

    useEffect(() => {
      loadBreeds();
    }, []);    
    
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    const onChangeAge = (age: number) => {
        onChange( 20, 'age' );
        // if (age > 20) {
        // }
    };

    const renderItem = (item: DogBreedRequest) => {
        const isSelected = item.name === form.breed;
        return(
            <TouchableOpacity
                activeOpacity={ 0.6 }
                style={[
                    styles.card,
                    isSelected && {backgroundColor: theme.colors.darkPrimary}
                ]}
                onPress={() => onChange( item.name, 'breed' )}
            >
                <FadeInImage
                    source={{ uri: item.image.url }}
                    style={styles.image}
                />
                {isSelected &&                 
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Icon
                            size={25} 
                            name='check-bold' 
                            style={{ color: theme.colors.darkBrown }} 
                        />
                    </View>
                }
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.content}>
            <Text style={styles.label}>
                ¿Como se llama tu mascota?
            </Text>
            <TextInput 
                  style={themeStyle.input}
                  placeholder="Nombre de mi mascota"
                  autoCorrect={ false }
                  autoCapitalize="words"
                  onChangeText={ (value) => onChange( value, 'name' ) }
                  placeholderTextColor={ theme.colors.grey }
                  value={form.name.toString()}
                  selectionColor={theme.colors.brown}
              />
            <Text style={styles.label}>
                ¿Que edad aproximada tiene?
            </Text>
            <TextInput 
                  style={themeStyle.input}
                  placeholder="Edad de mi mascota"
                  autoCorrect={ false }
                  autoCapitalize="words"
                  onChangeText={ (value) => onChangeAge(Number(value)) }
                  keyboardType='numeric'
                  placeholderTextColor={ theme.colors.grey }
                  value={form.age > 0 ? form.age.toString() : ''}
                  selectionColor={theme.colors.brown}
              />

            <Text style={styles.label}>
                Elige la raza más parecida a tu mascota
            </Text>
            <FlatList
                data={breeds}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}
                refreshing={isLoading}
                horizontal
            />
        </View>
    );
}

export default WelcomeScreen;
