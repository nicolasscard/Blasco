import React, { useContext } from 'react'
import { Text, View, Linking } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';

import { BackButton, FadeInImage, PrimaryButton } from '../../components';
import { ThemeContext } from '../../context/themeContext/ThemeContext';
import { phoneNumber, whatsAppMessage } from '../../constants/blasco';
import { StackParams } from '../../routes/RootStackNavigator';
import { contactStyles } from './styles';

interface Props extends StackScreenProps<StackParams, 'Contact'> {};

export const PermissionsScreen = ({ navigation }: Props) => {
  const { theme } = useContext( ThemeContext );
  const styles = contactStyles(theme);
  const img = require('../../assets/images/dogPermission.jpg');

  const openWhatsApp = () => {
    Linking.openURL(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsAppMessage)}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
       {/* Header*/}
      <View>
        <FadeInImage source={img} style={styles.fadeImage}/>
      </View>

      {/* Body*/}
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={styles.title}>
        {'¿Me permites acceder a tu ubicación?'}
        </Text>
        <PrimaryButton
          iconName='map-marker'
          text='Permitir'
          onPress={() => {}}
        />         
      </View>

      <BackButton />
    </View>
  );
}

export default PermissionsScreen;
