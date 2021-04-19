import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';
import COLORS from '../helpers/colors';

const CardButton = ({ text, fn }) => {
	return (
		<Pressable style={styles.cardButton} onPress={fn}>
			<Text style={styles.cardButtonTitle}>{text}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	cardButton: {
		justifyContent: 'center',
		backgroundColor: COLORS.cardButtonFill,
		borderColor: COLORS.cardButtonStroke,
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 5,
		height: 150,
		paddingHorizontal: 6,
	},
	cardButtonTitle: {
		fontSize: 28,
		color: COLORS.white,
		width: 150,
		textAlign: 'left',
		fontWeight: 'bold',
	},
	cardButtonImage: {
		height: 120,
		width: 150,
		resizeMode: 'stretch',
	},
});

export default CardButton;
