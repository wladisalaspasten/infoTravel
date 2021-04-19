import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import COLORS from '../helpers/colors';
import { rutFormated, rutValid } from '../helpers/runFn';
import ajax from '../helpers/ajax';
import HeaderBar from '../components/HeaderBar';
import RadioButtonBar from '../components/RadioButtonBar';
import PassengerCards from '../components/PassengerCards';
import PassengerNotFound from '../components/PassengerNotFound';
import Input from '../components/Input';
import Button from '../components/Button';

const SearchPassenger = props => {
	const [inputValue, setInputValue] = useState('');
	const [inputKbTy, setInputKbTy] = useState('default');
	const [inputPh, setInputPh] = useState('Rut');
	const [inputValid, setInputValid] = useState(0);
	const [searchBy, setSearchBy] = useState('rut');
	const [send, setSend] = useState(false);
	const [passengers, setPassengers] = useState([]);
	const [loader, setLoader] = useState(true);
	const codeToText = props.route.params?.codeToText ?? null;

	const cbGetRadioBtnActive = nameObj => {
		setInputPh(nameObj.propFormated);
		setInputValue('');
		setSend(false);
		setPassengers([]);

		switch (nameObj.prop) {
			case 'rut':
				setSearchBy(nameObj.prop);
				break;
			case 'ticket':
				setSearchBy('id');
				setInputKbTy('numeric');
				break;
			case 'qr':
				props.navigation.navigate('scanner');
				break;
		}
	};

	const inputRut = str => {
		if (rutValid(str)) {
			setInputValue(rutFormated(str));
			return console.log('El rut es válido ' + inputValue);
		} else {
			return console.log('El rut no es válido');
		}
	};

	const inputTicket = str => console.log(str.length === 10 ? 'Correcto' : 'Incorrecto');

	const handleInput = rutOrTicketNumber => {
		setInputValue(rutOrTicketNumber);

		switch (searchBy) {
			case 'rut':
				inputRut(rutOrTicketNumber);
				break;
			case 'id':
				inputTicket(rutOrTicketNumber);
				break;
		}
	};

	const getPasssengers = async () => {
		// if (inputValid !== 2 && inputValue >= 10) return setSend(false);

		setLoader(true);
		setSend(true);
		setPassengers([]);

		let passengerArr = [];
		// let passengersData = await ajax(`http://localhost:3001/api/ticket/${searchBy}/${inputValue}`, 'SearchPassenger');

		// if (passengersData.records === 0) return console.log('There arent results', passengerArr); // THIS WILL CHAGE DENDING OF THE API

		// passengersData.forEach(data => {
		// 	passengerArr.push({
		// 		['N° Boleto']: data.id_ticket,
		//		['Rut']: data.rut,
		// 		['Nombre']: `${data.name} ${data.last_name.split(' ')[0]}`,
		// 		['Fecha']: data.go_date.toLocaleString('es-CL'),
		// 		['Origen']: data.city_from_depart,
		// 		['Destino']: data.city_to_depart,
		// 		['N° Personal']: data.personal_phone,
		// 		['N° Emergencia']: data.emergency_phone,
		// 		['N° de Piso']: data.floor_number_depart,
		// 		['N° de Asiento']: data.seat_number_depart,
		// 	});
		// });

		passengerArr = [
			{
				'N° Boleto': 107,
				Rut: '18.060.922-9',
				Nombre: 'Moody Medina',
				Fecha: '07-04-2021 12:57:54',
				Origen: 'Ruda',
				Destino: 'Porto Cesareo',
				'N° Personal': '9 9853 7061',
				'N° Emergencia': '9 7676 1923',
				'N° de Piso': 1,
				'N° de Asiento': 30,
			},
			{
				'N° Boleto': 107,
				Rut: '18.060.922-9',
				Nombre: 'Mood Medina',
				Fecha: '07-04-2021 12:57:54',
				Origen: 'Ruda',
				Destino: 'Porto Cesareo',
				'N° Personal': '9 9853 7061',
				'N° Emergencia': '9 7676 1923',
				'N° de Piso': 1,
				'N° de Asiento': 30,
			},
		];

		setPassengers([...passengers, ...passengerArr]);
	};

	useEffect(() => {
		setLoader(false);
	}, [passengers]);

	useEffect(() => {
		if (codeToText) {
			// THIS EXEC WHEN THE USER SCANNED QR CODE
			setInputValue(codeToText);
			getPasssengers();
		}
	}, [codeToText]);

	return (
		<ImageBackground style={styles.bgImage} source={require('../images/pexels-bg.jpg')}>
			<View style={[styles.bgOpacity, styles.alignItems]}>
				<HeaderBar
					text='Buscar Pasajero'
					pathImg={require('../images/arrow_back_ios_black.png')}
					fn={() => props.navigation.navigate('home')}
				/>
				<View style={styles.container}>
					<RadioButtonBar cbGetBtnActive={cbGetRadioBtnActive} />
					<View style={styles.form}>
						<Input
							ph={inputPh}
							foc={false}
							kbTy={inputKbTy}
							onChangeText={text => handleInput(text)}
							value={inputValue}
						/>
						<Button value='Buscar' color={COLORS.secondary} onPress={getPasssengers} />
					</View>
					<View style={styles.results}>
						{send && loader ? (
							<ActivityIndicator size='large' />
						) : send && passengers.length === 0 ? (
							<PassengerNotFound />
						) : (
							<PassengerCards information={passengers} screen='search passenger' navigation={props.navigation} />
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

export default SearchPassenger;
