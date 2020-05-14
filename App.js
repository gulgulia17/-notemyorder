import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Screens/Splash';
import Home from './Screens/Home';

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <StatusBar translucent={true} hidden={true} backgroundColor="transparent" />
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash}
            options={{
              headerLeft: null,
              title: '',
              headerTitleStyle: {
                color: "#fff"
              },
              headerStyle: {
                height: 0,
              }
            }}
          />

          <Stack.Screen name="Home" component={Home}
            options={{
              headerLeft: null,
              title: '',
              headerStyle: {
                height:0
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}