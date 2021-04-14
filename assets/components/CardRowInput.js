import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '../helpers/colors';
import Button from './Button';

const CardRowInput = ({ information }) => {
	return (
		<View>
			<View style={styles.resultRow}>
				<Text style={styles.label}>Nombre</Text>
				<TextInput style={styles.input} defaultValue={information.name} />
			</View>
			<View style={styles.resultRow}>
				<Text style={styles.label}>Apellidos</Text>
				<TextInput style={styles.input} defaultValue={information.lastName} />
			</View>
			<View style={styles.col2}>
				<View style={[styles.resultRow, { marginRight: 4 }]}>
					<Text style={styles.label}>N° Personal</Text>
					<TextInput style={styles.input} defaultValue={information.personalPhone} />
				</View>
				<View style={[styles.resultRow, { marginLeft: 4 }]}>
					<Text style={styles.label}>N° Emergencia</Text>
					<TextInput style={styles.input} defaultValue={information.emergencyPhone} />
				</View>
			</View>
			<View style={styles.resultRow}>
				<Text style={styles.label}>Correo Electrónico</Text>
				<TextInput style={styles.input} defaultValue={information.email} />
			</View>
			<View style={styles.resultRow}>
				<Text style={styles.label}>Nacionalidad</Text>
				<TextInput style={styles.input} defaultValue={information.nacionality} />
			</View>
			<View style={styles.resultBtnContainer}>
				<Button styleAdditional={styles.resultBtn} value='Actualizar' color={COLORS.green} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	resultRow: {
		flexGrow: 1,
		// marginVertical: 8,
	},
	label: {
		fontSize: 20,
		fontWeight: 'bold',
		color: COLORS.white,
	},
	input: {
		backgroundColor: COLORS.white,
		padding: 8,
		marginVertical: 8,
		borderRadius: 10,
	},
	col2: {
		flexDirection: 'row',
		flex: 1,
	},
	resultBtnContainer: {
		flexDirection: 'row',
	},
	resultBtn: {
		flexGrow: 1,
	},
});

export default CardRowInput;
