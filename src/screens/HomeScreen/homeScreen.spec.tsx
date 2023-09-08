import React from 'react';
import { TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { TopTapParams } from '../../routes/TopTabNavigator';
import { lightTheme } from '../../theme/theme';
import HomeScreen from './HomeScreen';
import { StackParams } from '../../routes/RootStackNavigator';

type NavigationProps = StackNavigationProp<TopTapParams & StackParams, 'Home', undefined>;
type PartialNavigationProps = Partial<NavigationProps>;

const mockNavigate = jest.fn();
const mockNavigation: PartialNavigationProps = {
  navigate: mockNavigate,
};
const mockRoute: RouteProp<TopTapParams & StackParams, 'Home'> = {
  key: '123', // unique route key
  name: 'Home', // route name
  params: undefined,
};

const mockThemeContextValue = { 
  theme: lightTheme,
  setDarkTheme: jest.fn(),
  setLightTheme: jest.fn(),
};

/* Use when I need a permission */
// const mockPermissionContextValue = {
//   permissions: { locationStatus: 'granted' },
//   askLocationPermission: jest.fn(),
//   checkLocationPermission: jest.fn(),
// };

jest.mock('react', () => {
  const React = jest.requireActual('react');
  return {
    ...React,
    useContext: jest.spyOn(React, 'useContext'),
  }
});

jest.mock('react-native-splash-screen', () => {
  return { hide: () => true };
});

/* Use when I need a permission */
// jest.mock('../../context/PermissionsContext', () => ({
//   PermissionsContext: {
//     Consumer: ({ children }) => children(mockPermissionContextValue),
//   },
// }));
// jest.spyOn(React, 'useContext').mockReturnValue(mockPermissionContextValue);

jest.mock('../../context/themeContext/ThemeContext', () => ({
  ThemeContext: {
    Consumer: ({ children }) => children(mockThemeContextValue),
  },
}));
jest.spyOn(React, 'useContext').mockReturnValue(mockThemeContextValue);


describe('HomeScreen', () => {

  const component = renderer.create(
    <HomeScreen 
      navigation={mockNavigation as NavigationProps} 
      route={mockRoute} 
    /> 
  );

  it('should render correctly', () => {
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('navigates to Services screen when button is pressed', () => {
    const buttons = component.root.findAllByType(TouchableOpacity);
    buttons[0].props.onPress(); // Simulate button press

    expect(mockNavigate).toHaveBeenCalledWith('Services');
  });

  it('navigates to Contact screen when button is pressed', () => {
    const buttons = component.root.findAllByType(TouchableOpacity);
    buttons[1].props.onPress(); // Simulate button press

    expect(mockNavigate).toHaveBeenCalledWith('Contact');
  });
});
  