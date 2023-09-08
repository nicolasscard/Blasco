import React, { FC } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

const imgLoader = require('../assets/gifs/dogLoader.gif');

interface Props {
    width?: number;
    color?: string;
}

const Loader: FC<Props> = ({ width = 100, color = 'black' }) => {
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center', 
            justifyContent: 'center'
        },
        indicator: {
            position: 'absolute',
            right: width/15,
            top: width/15,
        }
    });

    return (
        <View style={styles.container}>
            <View style={{ width, height: width }}>
                <Image 
                    resizeMode={'contain'} 
                    source={imgLoader} 
                    style={{width, height: width}} 
                />
                <ActivityIndicator 
                    color={color}
                    style={styles.indicator}  />
            </View>
        </View>
    );
    
}

export default Loader;
