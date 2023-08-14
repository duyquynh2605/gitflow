import React, {Component} from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image
} from 'react-native'
import {AppRegistry} from 'react-native';
import App from './App';
import Splash from './components/Splash';
import Login from './components/Login';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

RootComponent = function() {
    return(
        <NavigationContainer initialRouteName="Login">
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="App" component={App} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
AppRegistry.registerComponent(appName, () => RootComponent);
