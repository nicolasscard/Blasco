import React, { useContext } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { TopTabNavigator } from './TopTabNavigator';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { WelcomeScreen, ServicesScreen, ContactScreen, PermissionsScreen, ReduxExampleScreen } from '../screens';

export type StackParams = {
  TopTabNavigator: undefined,
  Welcome: undefined,
  Services: undefined,
  Contact: undefined,
  Location: undefined,
  Permissions: undefined,
  ReduxExample: undefined,
}

const Stack = createStackNavigator<StackParams>();

export const RootStackNavigator = () => {
  const { theme } = useContext( ThemeContext );

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}> 
      <NavigationContainer theme={ theme }>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: {
              elevation: 0,
              shadowColor: 'transparent'
            },
            cardStyle: {
              backgroundColor: theme.colors.primary
            }
          }}
        >
          <Stack.Screen name="Welcome" options={{ title:"Bienvenido" }} component={ WelcomeScreen } />
          <Stack.Screen name="ReduxExample" options={{ title:"ReduxExample" }} component={ ReduxExampleScreen } />

          <Stack.Screen name="TopTabNavigator" options={{ headerShown: false }} component={ TopTabNavigator } />
          <Stack.Screen name="Services" options={{ headerShown: false }} component={ ServicesScreen } />
          <Stack.Screen name="Contact" options={{ headerShown: false }} component={ ContactScreen } />

          {/* <Stack.Screen name="PetShop" options={{ headerShown: false }} component={ PetShopScreen } /> */}

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}