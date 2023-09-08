import React, { useContext } from 'react'
import { Text, View, Linking } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';

import { ThemeContext } from '../../context/themeContext/ThemeContext';
import { description, fullName, groomer, phoneNumber, whatsAppMessage } from '../../constants/blasco';
import { StackParams } from '../../routes/RootStackNavigator';
import { contactStyles } from './styles';
import { FadeInImage, Card, BackButton, PrimaryButton } from '../../components';

interface Props extends StackScreenProps<StackParams, 'Contact'> {};

export const ContactScreen = ({ navigation }: Props) => {
  const { theme } = useContext( ThemeContext );
  const styles = contactStyles(theme);
  const img = require('../../assets/images/caress.jpg');

  const openWhatsApp = () => {
    Linking.openURL(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsAppMessage)}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {/* Header*/}
      <View>
        <FadeInImage source={img} style={styles.fadeImage} />
        <Card title={fullName} description={groomer} />
      </View>

      {/* Body*/}
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={styles.title}>
          Acerca de Valentina:
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
        <PrimaryButton 
          iconName='whatsapp'
          text='Pedir un turno'
          onPress={openWhatsApp}
        />
      </View>

      <BackButton />
    </View>
  );
}

export default ContactScreen;
