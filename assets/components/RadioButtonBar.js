import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import COLORS from '../helpers/colors';

const RadioButtonBar = ({ cbGetBtnActive }) => {
	const [stateBtns, setStateBtns] = useState({
		rut: true,
		ticket: false,
		qr: false,
	});

	const setActive = e => {
		// let id = e.nativeEvent.target.textContent.slice(-1).toUpperCase();
		// setActiveBtn(id);
	};

	const getPropCurrentActive = () => {
		let prop = Object.entries(stateBtns).filter(entry => {
			if (entry.includes(true)) return entry;
		});

		return prop[0][0];
	};

	const handlerButton = propBtnPressed => {
		let currentBtnActive = getPropCurrentActive();

		setStateBtns({ [currentBtnActive]: false, [propBtnPressed]: true });
	};

	useEffect(() => {
		let currentBtnActive = { prop: getPropCurrentActive() };

		switch (currentBtnActive.prop) {
			case 'rut':
				currentBtnActive.propFormated = 'Rut';
				break;
			case 'ticket':
				currentBtnActive.propFormated = 'N° de Boleto';
				break;
			default:
				currentBtnActive.propFormated = 'Qr';
				break;
		}

		cbGetBtnActive(currentBtnActive);
	}, [stateBtns]);

	return (
		<View style={styles.containerBtnRadioBtn}>
			<Pressable
				style={[styles.btnRadioBtn, stateBtns.rut ? styles.btnRadioBtnActive : false]}
				onPress={() => handlerButton('rut')}>
				<Text style={[styles.btnRadioBtnText, stateBtns.rut ? styles.btnRadioBtnTextActive : false]}>RUT</Text>
			</Pressable>
			<Pressable
				style={[styles.btnRadioBtnMiddle, stateBtns.ticket ? styles.btnRadioBtnActive : false]}
				onPress={() => handlerButton('ticket')}>
				<Text style={[styles.btnRadioBtnText, stateBtns.ticket ? styles.btnRadioBtnTextActive : false]}>N° BOLETO</Text>
			</Pressable>
			<Pressable
				style={[styles.btnRadioBtn, stateBtns.qr ? styles.btnRadioBtnActive : false]}
				onPress={() => handlerButton('qr')}>
				<Text style={[styles.btnRadioBtnText, stateBtns.qr ? styles.btnRadioBtnTextActive : false]}>QR</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	containerBtnRadioBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 16,
		borderWidth: 2,
		borderRadius: 20,
		borderColor: COLORS.secondary,
		overflow: 'hidden',
	},
	btnRadioBtn: {
		minWidth: 70,
	},
	btnRadioBtnMiddle: {
		borderLeftWidth: 2,
		borderRightWidth: 2,
		borderLeftColor: COLORS.secondary,
		borderRightColor: COLORS.secondary,
	},
	btnRadioBtnText: {
		fontSize: 20,
		textAlign: 'center',
		color: COLORS.secondary,
		fontWeight: 'bold',
		margin: 16,
	},
	btnRadioBtnActive: {
		backgroundColor: COLORS.secondary,
	},
	btnRadioBtnTextActive: {
		color: COLORS.white,
	},
});

export default RadioButtonBar;
