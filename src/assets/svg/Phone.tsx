import React, { FC, useContext } from 'react';
import { View } from 'react-native';
import Svg, { Circle, G, Path } from 'react-native-svg';
import { ThemeContext } from '../../context/themeContext/ThemeContext';

interface Props {
    useColors?: boolean;
    width?: number;
    height?: number;
}

const Phone: FC<Props> = ({ useColors = true, width = 100, height = 100 }) => {
    const { theme } = useContext( ThemeContext );
    let colors = [
        theme.colors.blue, // pantalla
        theme.colors.black,  // lineas
    ];
    const whiteAndBlack = [
        theme.colors.greyBlue,
        theme.colors.black,
    ];

    if (!useColors) colors = whiteAndBlack;

    return (
        <View style={{ width, height }}>
            <Svg enable-background="new 0 0 32 32" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg">
                <Circle cx="17" cy="28" fill={colors[0]} r="1"/>
                <G fill="black">
                    <Path d="m13 4h6v1h-6z"/>
                    <Path d="m13 4v1h6v-1zm0 0v1h6v-1zm0 0v1h6v-1zm0 0v1h6v-1zm-3 20v1h12v-1zm3-20v1h6v-1zm-3 20v1h12v-1zm3-20v1h6v-1zm-3 20v1h12v-1zm13-22h-14c-.55 0-1 .45-1 1v5h1v-1h14v21c0 .55-.45 1-1 1h-12c-.55 0-1-.45-1-1v-15h-1v16c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-26c0-.55-.45-1-1-1zm0 4h-14v-2c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 18h-12v1h12zm-9-19h6v-1h-6zm-3 19v1h12v-1zm3-20v1h6v-1zm0 0v1h6v-1zm0 0v1h6v-1zm0 0v1h6v-1z"/>
                    <Path d="m13 4h6v1h-6z"/>
                    <Path d="m13 4h6v1h-6z"/>
                    <Path d="m13 4h6v1h-6z"/>
                </G>
                <Path d="m14 5h6v1h-6z" fill={colors[0]}/>
                <Path d="m15 7h1v17h-1z" fill={colors[0]}/>
                <Path d="m13 7h1v17h-1z" fill={colors[0]}/>
                <Path d="m17 7h6v17h-6z" fill={colors[0]}/>
                <Circle cx="16" cy="27" fill="black" r="1"/>
                <Path d="m10 9.5c0-.276-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5 0 .276.224.5.5.5h2c.276 0 .5-.224.5-.5z" fill="black"/>
                <Path d="m10 11.5c0-.276-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5 0 .276.224.5.5.5h2c.276 0 .5-.224.5-.5z" fill="black"/>
            </Svg>
        </View>
    );
}

export default Phone;
