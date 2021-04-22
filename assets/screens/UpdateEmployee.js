import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';

import COLORS from '../helpers/colors';
import { rutFormated, rutValid } from '../helpers/runFn';
import ajax from '../helpers/ajax';

import Button from '../components/Button';
import Input from '../components/Input';
import HeaderBar from '../components/HeaderBar';
import Modal from '../components/Modal';
import PassengerCards from '../components/PassengerCards';
import PassengerNotFound from '../components/PassengerNotFound';

const UpdatePassenger = props => {
	const [inputValue, setInputValue] = useState('');
	const [send, setSend] = useState(false);
	const [passengers, setPassengers] = useState({});
	const [loader, setLoader] = useState(true);
	const Rut = props.route.params?.Rut ?? null;

	const inputRut = str => {
		if (str.length < 8) return;

		if (str !== '' && rutValid(str)) {
			setInputValue(rutFormated(str));
			return console.log('El rut es válido ' + inputValue);
		} else {
			return console.log('El rut no es válido');
		}
	};

	const handleInput = rutOrTicketNumber => {
		setInputValue(rutOrTicketNumber);

		inputRut(rutOrTicketNumber);
	};

	const getPasssengers = async () => {
		// if (inputValid !== 2 && inputValue >= 10) return setSend(false);

		setLoader(true);
		setSend(true);
		setPassengers({});

		let passenger;
		// let passengersData = await ajax(`http://localhost:3001/api/ticket/${searchBy}/${inputValue}`, 'SearchPassenger');

		// if (passengersData.records === 0) return console.log('There arent results', passengerArr); // THIS WILL CHAGE DENDING OF THE API

		// passengersData.forEach(data => {
		// 	passenger = {
		//		name: data.name,
		//		lastName: data.last_name,
		//		personalPhone: data.personal_phone.toString(),
		//		emergencyPhone: data.emergency_phone.toString(),
		//		email: data.email,
		//		nacionality: data.nacionality,
		// 	};
		// });

		passenger = {
			name: 'Moody',
			lastName: 'Medina Lloyd',
			personalPhone: '998537061',
			emergencyPhone: '976761923',
			email: 'rutrum.eu.ultrices@pede.ca',
			password: 'australiana',
		};

		setPassengers(passenger);
	};

	useEffect(() => {
		setLoader(false);
	}, [passengers]);

	useEffect(() => {
		// THIS EXEC WHEN THE USER FROM Search Passenger SCREEN
		if (Rut) {
			setInputValue(Rut);
			getPasssengers();
		}
	}, [Rut]);

	return (
		<ImageBackground style={styles.bgImage} source={require('../images/pexels-bg.jpg')}>
			<View style={[styles.bgOpacity, styles.alignItems]}>
				<HeaderBar
					text='Actualizar Información Auxiliar'
					pathImg={require('../images/arrow_back_ios_black.png')}
					fn={() => props.navigation.navigate('home')}
				/>
				<Modal customStyle={styles.modal} />
				<View style={styles.container}>
					<View style={styles.form}>
						<Input ph='Rut' foc={false} kbTy='numeric' onChangeText={text => handleInput(text)} value={inputValue} />
						<Button value='Buscar' color={COLORS.secondary} onPress={getPasssengers} />
					</View>
					<View style={styles.results}>
						{send && loader ? (
							<ActivityIndicator size='large' />
						) : send && passengers.length === 0 ? (
							<PassengerNotFound />
						) : (
							<PassengerCards information={passengers} screen='update employee' navigation={props.navigation} />
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
		backgroundColor: 'rgba(221, 221, 221, 0.85);',
	},
	alignItems: {
		alignItems: 'center',
	},
	modal: {
		marginTop: 15,
		marginRight: 10,
	},
	container: {
		flex: 1,
		height: '100%',
		width: '90%',
		minWidth: 240, // Galaxy Fold 280px
		maxWidth: 400,
		alignItems: 'center',
	},
	form: {
		width: '100%',
		marginVertical: 16,
	},
	results: {
		width: '100%',
		flexGrow: 1,
	},
});

export default UpdatePassenger;
