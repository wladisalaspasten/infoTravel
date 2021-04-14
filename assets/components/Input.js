import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import COLORS from '../helpers/colors';

const Input = ({ ph, foc, kbTy, onChangeText, value, secureTextEntry = false }) => {
	const [val, setVal] = useState(value);

	useEffect(() => setVal(value), [value]);

	return (
		<TextInput
			style={styles.input}
			placeholder={ph}
			autoFocus={foc}
			keyboardType={kbTy}
			value={value}
			onChangeText={onChangeText}
			secureTextEntry={secureTextEntry}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		backgroundColor: COLORS.white,
		padding: 8,
		marginVertical: 8,
		borderRadius: 10,
	},
	inputFocus: {
		borderWidth: 1.5,
		borderColor: COLORS.main,
		borderStyle: 'solid',
	},
});

export default Input;
