import React, { FC, useContext } from 'react';
import { View } from 'react-native';
import Svg, { Path, G, Rect, Circle, ClipPath } from 'react-native-svg';
import { ThemeContext } from '../../context/themeContext/ThemeContext';

interface Props {
    useColors?: boolean;
    width?: number;
    height?: number;
}

export const Images: FC<Props> = ({ useColors = true, width = 100, height = 100 }) => {
    const { theme } = useContext( ThemeContext );
    
    let colors = [
        theme.colors.brown,  // montaña
        theme.colors.blue,  // cielo
        theme.colors.darkYellow,  // sol
        theme.colors.black, // linea contorno
    ];
    const whiteAndBlack = [
        theme.colors.greyBrown,
        theme.colors.greyBlue,
        theme.colors.greyYellow,
        theme.colors.black,
    ];
    
    if (!useColors) colors = whiteAndBlack; 
    
    return (
        <View style={{ width, height }}>
            <Svg fill="transparent" height={height} viewBox="0 0 32 32" width={width} xmlns="http://www.w3.org/2000/svg">
                <ClipPath id="a">
                    <Path d="m0 0h32v32h-32z"/>
                </ClipPath>
                        <Path d="m17.9902 22.01 5.01-5.01c.84-.84 1.17-.83 2 0l6 6v7c0 .55-.45 1-1 1h-28.00002c-.55 0-1-.45-1-1v-7l8-7.99c.84-.84 1.17002-.82 2.00002.01z" fill={colors[0]} />
                        <Path d="m31 2v21l-6-6c-.83-.83-1.16-.84-2 0l-5.01 5.01-6.99-6.99c-.83-.83-1.16-.85-2-.01l-8 7.99v-21c0-.55.45-1 1-1h28c.55 0 1 .45 1 1z" fill={colors[1]} stroke={colors[3]} />
                        <Path d="m21 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" fill={colors[2]} />
                        <Path d="m18 22.0315-7-7.016c-.828-.828-1.164-.843-2-.007l-8 7.992v7c0 .552.447 1 1 1h28c.553 0 1-.448 1-1v-28.00001c0-.553-.447-1-1-1h-28c-.553 0-1 .447-1 1v17.00001m15 4.9997 7-7c.836-.836 1.172-.828 2 0l3 3m-5-11.00001c0 1.10401-.896 2.00001-2 2.00001s-2-.896-2-2.00001c0-1.104.896-2 2-2s2 .896 2 2z" stroke={colors[3]} />
            </Svg>
        </View>
)};

export default Images;
