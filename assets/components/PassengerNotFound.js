import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import COLORS from '../helpers/colors';

const PassengerNotFound = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require('../images/undraw_no_data.png')} />
			<Text style={styles.text}>{'No\nExisten\nRegistros'}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	image: {
		width: '60%',
		height: '60%',
		resizeMode: 'center',
	},
	text: {
		textAlign: 'center',
		fontSize: 32,
		fontWeight: 'bold',
		color: COLORS.white,
	},
});

export default PassengerNotFound;
