import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultPage } from '../views/Default';

const Stack = createStackNavigator();

export function ApplicationNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={DefaultPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}