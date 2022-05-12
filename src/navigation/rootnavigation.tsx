import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootBottom from './bottomRoot';


export default function RootNavigaiton () {
    return(
        <NavigationContainer>
            <RootBottom />
        </NavigationContainer>
    );
}