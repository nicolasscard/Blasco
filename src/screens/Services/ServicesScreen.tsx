import React, { useState, useContext  } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import PagerView from 'react-native-pager-view';

import { StackScreenProps } from '@react-navigation/stack';
import { StackParams } from '../../routes/RootStackNavigator';
import { ThemeContext } from '../../context/themeContext/ThemeContext';
import { Service, services } from '../../constants/services';
import { servicesStyles } from './styles';

interface Props extends StackScreenProps<StackParams, 'Services'> {};

const ServicesScreen = ({ navigation }: Props) => {
    const { theme } = useContext( ThemeContext );
    const styles = servicesStyles(theme);
    const [currentPage, setCurrentPage] = useState<number>(0);

    const updateCurrentPage = (event: any) => {
        setCurrentPage(event.nativeEvent.position);
    };

    const renderItem = ( item: Service ) => {
        return (
            <View style={{ flex: 1 }} key={item.key} testID={`page-${item.key}`}>
                <ImageBackground source={item.img} style={styles.image}>
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.5)']}
                        style={{ flex: 0.5 }}
                    >
                    </LinearGradient>
                    <LinearGradient
                        colors={[
                            'rgba(0,0,0,0.5)',
                            'rgba(0,0,0,0.75)', 
                            'rgba(0,0,0,0.9)', 
                            'rgba(0,0,0,0.95)', 
                            'rgba(0,0,0,1)',
                        ]}
                        style={{ flex: 0.5 }}
                    >
                    </LinearGradient>
                </ImageBackground>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{ item.title }</Text>
                    <Text style={styles.subTitle}>{ item.desc }</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={{ flex:1 }}>
            <PagerView 
                style={styles.pagerView} 
                initialPage={0} 
                scrollEnabled={true}
                onPageSelected={updateCurrentPage}
            >
              {services.map((item) => renderItem(item))}
            </PagerView>
            <View style={styles.paginationDot}>
                {Array.from({ length: services.length }).map((_, index) => (
                    <View
                        key={index}
                        style={[styles.dot, index === currentPage && styles.activeDot]}
                    />
                ))}
            </View>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={() => navigation.goBack()}
                    testID="backButton"
                >
                    <Icon size={20} name='chevron-back' style={{ color: theme.colors.blackPrimary }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ServicesScreen;
