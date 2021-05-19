import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler'; /** Provides gesture management APIs for building best possible touch-based experiences. */
import { NavigationContainer } from '@react-navigation/native'; /** Create the navigation structure. */
import { createStackNavigator } from '@react-navigation/stack'; /** Provides a way to transition between screens and manage navigation history. */

import Login from './assets/screens/Login';
import Home from './assets/screens/Home';
import SearchPassenger from './assets/screens/SearchPassenger';
import UpdatePassenger from './assets/screens/UpdatePassenger';
import SeatsAvailable from './assets/screens/SeatsAvailable';
import Scanner from './assets/screens/Scanner';
import HomeAdmin from './assets/screens/HomeAdmin';
import UpdateEmployee from './assets/screens/UpdateEmployee';

export default function App() {
	/**
	 * createStackNavigator is a function that returns an object containing two properties.
	 * Screen and Navigator
	 * @returns {object}
	 */
	// Pruebaaaaaa
	const Stack = createStackNavigator();

	return (
		<>
			<StatusBar backgroundColor="#CCCCCC85" barStyle="dark-content" />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="login"
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name="login" component={Login} />
					<Stack.Screen name="home" component={Home} />
					<Stack.Screen name="search passenger" component={SearchPassenger} />
					<Stack.Screen name="update passenger" component={UpdatePassenger} />
					<Stack.Screen
						name="view seats available"
						component={SeatsAvailable}
					/>
					<Stack.Screen name="scanner" component={Scanner} />

					<Stack.Screen name="home admin" component={HomeAdmin} />
					<Stack.Screen name="update employee" component={UpdateEmployee} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
