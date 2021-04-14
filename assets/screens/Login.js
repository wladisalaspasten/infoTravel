import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, Alert, Pressable } from 'react-native';
import { rutFormated, rutValid } from '../helpers/runFn';
import Input from '../components/Input';
import Button from '../components/Button';
import COLORS from '../helpers/colors';

import * as Linking from 'expo-linking';
import qs from 'qs';

const Login = props => {
	const [inputsValues, setInputsValues] = useState({ user: '', pass: '' });

	const handlerInput = (text, type) => {
		setInputsValues({ ...inputsValues, [type]: text });

		if (type === 'user') {
			if (rutValid(text)) {
				setInputsValues({ ...inputsValues, user: rutFormated(text) });
				return console.log('El rut es válido ' + inputsValues.user);
			} else {
				return console.log('El rut no es válido');
			}
		} else {
			setInputsValues({ ...inputsValues, pass: text });
		}
	};

	const sendEmail = async () => {
		let url = `mailto:l.espinozas.sotelo@gmail.com`;
		// let url = `mailto:soporte@smartsoftware.cl`;

		const query = qs.stringify({
			subject: 'Contraseña Olvidada | NO EDITAR',
			body: `El trabajador con cédula de identidad ${inputsValues.user}, solicita un cambio de contraseña`,
			// cc: `${employeeEmail}`,
			// bcc: bcc,
		});

		url += `?${query}`;

		const canOpen = await Linking.openURL(url);

		if (!canOpen) {
			Alert.alert('Hubó un error al enviar la solicitud. Por favor, vuelva a intentarlo.');
		}
		Alert.alert('Mensaje enviado', 'Pronto nos pondremos en contacto contigo');

		return Linking.openURL(url);
	};

	return (
		<ImageBackground style={styles.bgImage} source={require('../images/pexels-bg.jpg')}>
			<View style={[styles.bgOpacity, styles.alignItems]}>
				<View style={styles.container}>
					<View style={styles.containerLogo}>
						<Image style={styles.logo} source={require('../images/login/directions_bus.png')} />
					</View>
					<View style={styles.containerForm}>
						{/* number-pad decimal-pad numeric email-address */}
						<Input
							ph='Rut'
							foc={true}
							kbTy='phone-pad'
							value={inputsValues.user}
							onChangeText={text => handlerInput(text, 'user')}
						/>
						<Input
							ph='Contraseña'
							foc={false}
							kbTy='default'
							value={inputsValues.pass}
							onChangeText={text => handlerInput(text, 'pass')}
							secureTextEntry={true}
						/>
						<Button value='Ingresar' color={COLORS.main} onPress={() => props.navigation.navigate('home')} />
						<View style={styles.forgetPassword}>
							<Text style={styles.forgetPasswordText}>Cambie su contraseña haciendo</Text>

							<Pressable onPress={() => sendEmail()}>
								<Text style={styles.forgetPasswordTextLink}>Clic aquí</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	bgImage: {
		flex: 1,
		resizeMode: 'stretch', // 'cover' or 'stretch'
	},
	bgOpacity: {
		flex: 1,
		backgroundColor: 'rgba(221, 221, 221, 0.8);',
	},
	alignItems: {
		alignItems: 'center',
	},
	container: {
		display: 'flex',
		height: '100%',
		width: '80%',
		minWidth: 240, // Galaxy Fold 280px
		maxWidth: 400,
		alignItems: 'center',
	},
	containerLogo: {
		display: 'flex',
		justifyContent: 'center',
		flexGrow: 1,
	},
	logo: {
		height: 75,
		width: 75,
	},
	containerForm: {
		width: '100%',
		flexGrow: 1,
	},
	forgetPassword: {
		marginTop: 32,
	},
	forgetPasswordText: {
		color: COLORS.main,
		fontSize: 16,
		textAlign: 'center',
	},
	forgetPasswordTextLink: {
		color: COLORS.secondary,
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
		textDecorationLine: 'underline',
	},
});

export default Login;
