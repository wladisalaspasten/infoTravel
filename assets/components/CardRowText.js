import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../helpers/colors';

const CardRowText = ({ prop, val }) => {
	return (
		<View style={styles.resultRow}>
			<Text style={styles.column1}>{prop}</Text>
			<Text style={styles.column2}>{val}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	resultRow: {
		flexDirection: 'row',
	},
	column1: {
		fontSize: 20,
		fontWeight: 'bold',
		color: COLORS.white,
		width: 150,
	},
	column2: {
		flexGrow: 1,
		fontSize: 20,
		color: COLORS.white,
		textAlign: 'left',
	},
});

export default CardRowText;
