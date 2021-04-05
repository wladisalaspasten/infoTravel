import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './assets/components/Login';
import Home from './assets/components/Home';
import SearchPassenger from './assets/components/SearchPassenger';
import UpdatePassenger from './assets/components/UpdatePassenger';
import SeatsAvailable from './assets/components/SeatsAvailable';

export default function App() {  
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar backgroundColor='#CCCCCC85' barStyle='dark-content' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="search passenger" screenOptions={{headerShown: false}} >
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="search passenger" component={SearchPassenger} />
          <Stack.Screen name="update passenger" component={UpdatePassenger} />
          <Stack.Screen name="view seats available" component={SeatsAvailable} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}