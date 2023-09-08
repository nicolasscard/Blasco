import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LogBox } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { HomeScreen, AlbumsScreen, LocationScreen, PetShopScreen } from '../screens';
import { DogToy, Home, Images, Location, Phone } from '../assets/svg';
import { ThemeContext } from '../context/themeContext/ThemeContext';

LogBox.ignoreLogs(['Sending'])

export type TopTapParams = {
  // HomeStack: undefined,
  Home: undefined,
  Albums: undefined,
  Location: undefined,
  // Contact: undefined,
  // PetShop: undefined,
  // Permissions: undefined,
}

const Tab = createMaterialTopTabNavigator<TopTapParams>();

export const TopTabNavigator = () => {
  const { theme: { fonts, colors } } = useContext( ThemeContext );
  const { top:paddingTop } = useSafeAreaInsets();
  const navigation = useNavigation();

  const hiddenTabBarScreens = {
    Services: true,
  };

  const getTabBarOptions = (title: string) => ({
    title,
    tabBarLabelStyle: { fontFamily: fonts.IndieFlower, color: colors.text },
    tabBarVisible: false,
    swipeEnabled: false,
    // tabBarStyle: { height: 0 },
  });

  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={ ({ route }) => ({
        tabBarActiveTintColor: colors.secondary,
        tabBarShowIcon: true,
        // tabBarInactiveTintColor: 'red',
        tabBarIndicatorStyle: {
          backgroundColor: colors.secondary,
        },
        tabBarStyle: {
          backgroundColor: colors.primary,
          shadowColor: 'transparent',
          elevation: 0,
          // display: myTabButton(navigation),
        },
        // tabBarButton: null, // to personalize tab
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch( route.name ) {
            case 'Home':
              return <Home width={25} height={25} useColors={focused} />;
              // iconName = 'home'
              // iconName = 'home-outline'
            break;

            case 'Albums':
              return <Images width={22} height={22} useColors={focused} />;
              // iconName = 'image'
              // iconName = 'image-outline'
            break;

            case 'Location':
              return <Location width={25} height={25} useColors={focused} />;
              // iconName = 'log-out'
              // iconName = 'log-out-outline'
            break;

            // case 'Contact':
            //   return <Phone width={25} height={25} useColors={focused} />;
            //   // iconName = 'log-out'
            //   // iconName = 'log-out-outline'
            // break;

            // case 'PetShop':
            //   return <DogToy width={25} height={25} useColors={focused} />;
            //   // iconName = 'log-out'
            //   // iconName = 'log-out-outline'
            // break;
          }
          return <Icons name={ iconName } size={ 20 } color={ color } />
        },
      })}
    >
      {/* <Tab.Screen name="HomeStack" options={getTabBarOptions('Inicio')} component={ HomeStackNavigator } /> */}
      <Tab.Screen name="Home" options={getTabBarOptions('Inicio')} component={ HomeScreen } />
      <Tab.Screen name="Location" options={getTabBarOptions('Ubicacion')} component={ LocationScreen } />
      <Tab.Screen name="Albums" options={getTabBarOptions('Imagenes')} component={ AlbumsScreen } />
      {/* <Tab.Screen name="Contact" options={getTabBarOptions('Contacto')} component={ ContactScreen } /> */}
      {/* <Tab.Screen name="PetShop" options={getTabBarOptions('Tienda')} component={ PetShopScreen } /> */}
      {/* <Tab.Screen name="Permissions" options={getTabBarOptions('Permissions')} component={ PetShopScreen } /> */}
    </Tab.Navigator>
  );
}
