import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './assets/screens/Login';
import Home from './assets/screens/Home';
import SearchPassenger from './assets/screens/SearchPassenger';
import UpdatePassenger from './assets/screens/UpdatePassenger';
import SeatsAvailable from './assets/screens/SeatsAvailable';
import Scanner from './assets/screens/Scanner';

export default function App() {
	const Stack = createStackNavigator();

	return (
		<>
			<StatusBar backgroundColor='#CCCCCC85' barStyle='dark-content' />
			<NavigationContainer>
				<Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
					<Stack.Screen name='login' component={Login} />
					<Stack.Screen name='home' component={Home} />
					<Stack.Screen name='search passenger' component={SearchPassenger} />
					<Stack.Screen name='update passenger' component={UpdatePassenger} />
					<Stack.Screen name='view seats available' component={SeatsAvailable} />
					<Stack.Screen name='scanner' component={Scanner} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
