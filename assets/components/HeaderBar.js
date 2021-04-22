import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';
import COLORS from '../helpers/colors';

const HeaderBar = ({ text, pathImg, fn }) => {
	return (
		<Pressable style={styles.containerTitle} onPress={fn}>
			<Image style={styles.arrowBack} source={pathImg} />
			<Text style={styles.title}>{text}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	containerTitle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginVertical: 16,
	},
	title: {
		fontSize: 24,
		color: COLORS.secondary,
		fontWeight: 'bold',
		textAlign: 'center',
		width: '60%',
	},
	arrowBack: {
		position: 'absolute',
		left: -5,
		height: 40,
		width: 40,
	},
});

export default HeaderBar;
