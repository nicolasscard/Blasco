import React from 'react';
import renderer from 'react-test-renderer';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { TopTapParams } from '../../routes/TopTabNavigator';
import { lightTheme } from '../../theme/theme';
import ServicesScreen from './ServicesScreen';
import { StackParams } from '../../routes/RootStackNavigator';
import { Platform } from 'react-native';

type NavigationProps = StackNavigationProp<StackParams, 'Services', undefined>;
type PartialNavigationProps = Partial<NavigationProps>;
Platform
const mockNavigate = jest.fn();
const mockNavigation: PartialNavigationProps = {
  goBack: mockNavigate,
};
const mockRoute: RouteProp<TopTapParams & StackParams, 'Services'> = {
  key: '123', // unique route key
  name: 'Services', // route name
  params: undefined,
};

const mockThemeContextValue = { 
  theme: lightTheme,
  setDarkTheme: jest.fn(),
  setLightTheme: jest.fn(),
};

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

jest.mock('../../context/themeContext/ThemeContext', () => ({
  ThemeContext: {
    Consumer: ({ children }) => children(mockThemeContextValue),
  },
}));
jest.spyOn(React, 'useContext').mockReturnValue(mockThemeContextValue);  

describe('ServicesScreen', () => {

  const component = renderer.create(
    <ServicesScreen 
      navigation={mockNavigation as NavigationProps} 
      route={mockRoute} 
    /> 
  );

  // it('should render correctly', () => {
  //   const tree = component.toJSON();

  //   expect(tree).toMatchSnapshot();
  // });

  // it('calls navigation.goBack() when the back button is pressed', () => {
  //   const backButton = component.root.findByProps({ testID: 'backButton' });
  //   backButton.props.onPress();
  
  //   expect(mockNavigation.goBack).toHaveBeenCalled();
  // });

  it('navigates to the next page in PagerView', () => {
    const instance = component.root;
    const page1 = instance.findByProps({ children: 'page-0' });
    const page2 = instance.findByProps({ children: 'page-1' });

    // const tree = component.toJSON();
    // const page1Instance = tree?.children?.find(child => child.props.testID === 'page-0');
  
    // expect(page1Instance).toBeDefined();

    // Simular el desplazamiento a la siguiente página
    page1.props.scrollToPage();

    // Verificar si la página actual cambió a la página 2
    expect(page2.props.style.opacity).toBe(1); // Ajusta esta verificación según tu implementación



  });

});
  