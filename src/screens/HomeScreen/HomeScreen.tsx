import React, { useEffect, useContext } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Vibration } from 'react-native'; // TODO: Add NetInfo
import SplashScreen from 'react-native-splash-screen';
import { StackScreenProps } from '@react-navigation/stack';

import { PetCollar, Services, Phone, Portada } from '../../assets/svg/index';
import { TopTapParams } from '../../routes/TopTabNavigator';
import { StackParams } from '../../routes/RootStackNavigator';
import { ThemeContext } from '../../context/themeContext/ThemeContext';
import { homeStyles } from './styles';
import { appTitle, appSubTitle } from '../../constants/blasco';

const { width } = Dimensions.get('window');

type Screens = { Services: 'Services'; Contact: 'Contact'; Permissions: 'Permisos';};
type screenOption = { key: keyof Screens, value: string };
interface Props extends StackScreenProps<TopTapParams & StackParams, 'Home'>{};

const HomeScreen = ({ route, navigation }: Props) => {
    const { theme } = useContext( ThemeContext );
    const styles = homeStyles(theme);

    const options: screenOption[] = [
        { key: 'Services', value: 'Servicios' },
        { key: 'Contact', value: 'Contacto' },
        { key: 'Permissions', value: 'Permisos' },
    ];

    useEffect(() => {
        SplashScreen.hide();
        // TODO: Add check internet connection using NetInfo
        Vibration.vibrate([500, 3000]); // Waithing miliseconds to vibrate
    }, []);
    

    const cardButton = (option: screenOption) => {
        let SvgImage = <PetCollar width={width/5} height={width/5} />;
        switch (option.key) {
            case options[0].key:
                SvgImage = <Services width={width/7} height={width/7} />;
                break;
            case options[1].key:
                SvgImage = <Phone width={width/7} height={width/7} />;
                break;
            case options[2].key:
                SvgImage = <Phone width={width/7} height={width/7} />;
                break;
        }

        const goToScreen = (option: screenOption) => {
            navigation.navigate(option.key);
        };

        return (
            <TouchableOpacity onPress={() => goToScreen(option)}>
                <View style={styles.card}>
                    {SvgImage}
                    <Text style={styles.cardTitle}>{option.value}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.content}>
            <View style={{ flex: 0.9, justifyContent: 'center' }}>
                <Text style={styles.title}>{appTitle}</Text>
                <Portada isLightTheme={!theme.dark}  width={width} height={width} />
                <Text style={styles.subTitle}>{appSubTitle}</Text>
            </View>       
            <View style={styles.row}>
                {cardButton(options[0])}
                {cardButton(options[1])}
                {cardButton(options[2])}
            </View>
        </View>     
    );
}

export default HomeScreen;
