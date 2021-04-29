import React, { useState } from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, Alert, Pressable } from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';
import Modal from '../components/Modal';

import { rutFormated, rutValid } from '../helpers/runFn';
import COLORS from '../helpers/colors';

const Login = props => {
	const [inputsValues, setInputsValues] = useState({ user: '', pass: '' });
	const [forgetPass, setForgetPass] = useState(false);

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

	const sendEmail = () => {
		const data = {
			to: 'soporte@smartsoftware.cl',
			subject: 'Recuperación Contraseña',
			html: `El trabajador con cédula de identidad <b>${inputsValues.user}</b>, solicita un cambio de contraseña`,
		};

		const optFeth = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: JSON.stringify(data),
		};

		fetch('http://localhost:3000/sendEmail', optFeth)
			.then(response => response.text())
			.then(code => {
				code == 1
					? alert(
							'Estimado/a Usuario/a,\nHemos enviado un mensaje con su requirimento MDS Smart Software para gestionar su solicitud.',
					  )
					: alert('Error at the server, code ', code);
			})
			.catch(err => console.log('Hubo un error, Favor vuelva a intentarlo más tarde ', err));
	};

	const authEmployee = async ({ user, pass }) => {
		const query = `
			query{
				authEmployee(rut:"${user}", pass:"${pass}")
			}
		`;

		const res = await fetch(`http://localhost:3000/v1/infoTravel?query=${query}`);
		const { data } = await res.json();
		const authorized = data.authEmployee ?? false;

		if (authorized) {
			props.navigation.navigate('home');
		} else {
			setForgetPass(true);
			alert('Usuario o contraseña no validos.');
		}
	};

	return (
		<ImageBackground style={styles.bgImage} source={require('../images/pexels-bg.jpg')}>
			<View style={[styles.bgOpacity, styles.alignItems]}>
				<Modal customStyle={styles.modal} />
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
						<Button value='Ingresar' color={COLORS.main} onPress={() => authEmployee(inputsValues)} />
						{forgetPass && (
							<View style={styles.forgetPassword}>
								<Text style={styles.forgetPasswordText}>¿Olvidó su contraseña?</Text>
								<Pressable onPress={() => sendEmail()}>
									<Text style={styles.forgetPasswordTextLink}>Clic aquí</Text>
								</Pressable>
							</View>
						)}
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
	modal: {
		marginTop: 15,
		marginRight: 10,
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
