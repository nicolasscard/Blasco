import React, { useContext, useEffect } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { StackParams } from '../../routes/RootStackNavigator';
import { useForm } from '../../hooks/useForm';
import { Breed, Pet } from '../../interfaces/dogs';
import { FadeInImage } from '../../components';
import { useFetchBreedsQuery } from '../../reduxSlices/dogs/dogs-api-slice';
import { ThemeContext } from '../../context/themeContext/ThemeContext';
import { themeStyles } from '../../theme/theme';
import { welcomeStyles } from './styles';

interface Props extends StackScreenProps<StackParams, 'Welcome'>{};

const WelcomeScreen = ({ route, navigation }: Props) => {
    const { theme } = useContext( ThemeContext );
    const styles = welcomeStyles(theme);
    const themeStyle = themeStyles(theme);  

    // useFetchBreedsQuery is called after the component is mounted, is not necesary include it in a useEffect
    const { data: breeds = [], isFetching, isLoading, isError, error } = useFetchBreedsQuery();
    const { form, onChange } = useForm<Pet>({ name: '', breed: '', age: 0, image: '' });
   
    
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    const onChangeAge = (age: number) => {
        onChange( 20, 'age' );
        // if (age > 20) {
        // }
    };

    const renderItem = (item: Breed) => {
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
            {/** Pet Name */}
            <Text style={styles.label}>¿Como se llama tu mascota?</Text>
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
            
            {/** Pet Age */}
            <Text style={styles.label}>¿Que edad aproximada tiene?</Text>
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

            {/** Pet Breed */}
            <Text style={styles.label}>
                Elige la raza más parecida a tu mascota
            </Text>
            <FlatList
                data={breeds}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}
                refreshing={isFetching || isLoading}
                horizontal
            />
        </View>
    );
}

export default WelcomeScreen;
