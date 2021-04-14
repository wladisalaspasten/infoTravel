import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, StatusBar, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Scanner = props => {
	const [hasPermission, setHasPermission] = useState(null);

	const AllowCamera = async () => {
		const { status } = await BarCodeScanner.requestPermissionsAsync();

		if (status === 'granted') {
			setHasPermission(true);
		} else {
			missingPermission();
		}
	};

	const handleBarCodeScanned = ({ data }) => props.navigation.navigate('search passenger', { codeToText: data });

	const missingPermission = () => {
		Alert.alert('Falta de Permisos', 'Se requieren permisos para acceder a la cámara', [
			{
				text: 'Cancelar',
				onPress: () => props.navigation.goBack(),
			},
			{
				text: 'Dar Permiso',
				cancelable: false,
				onPress: () => AllowCamera(),
			},
		]);
	};

	useEffect(() => {
		AllowCamera();
	}, []);

	return (
		<>
			{hasPermission ? (
				<>
					<StatusBar backgroundColor='#000000' barStyle='light-content' />
					<View style={styles.container}>
						<BarCodeScanner
							onBarCodeScanned={handleBarCodeScanned}
							style={StyleSheet.absoluteFill}
							type='back'
							barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
						/>
						<View style={styles.square}></View>
					</View>
				</>
			) : (
				<Button title='Dar Permisos' onPress={AllowCamera} />
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
		justifyContent: 'center',
		alignItems: 'center',
	},
	square: {
		height: 250,
		width: 250,
		borderRadius: 50,
		borderStyle: 'dashed',
		borderWidth: 5,
		borderColor: '#ffffff',
	},
});

export default Scanner;
