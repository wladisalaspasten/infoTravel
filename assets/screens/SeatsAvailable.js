import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Pressable } from 'react-native';
import COLORS from '../helpers/colors';
import Button from '../components/Button';
import HeaderBar from '../components/HeaderBar';

const SeatsAvailable = props => {
	const [title, setTitle] = useState('Primer');
	const [rotateArrow, setRotateArrow] = useState({ transform: [{ rotate: '0deg' }] });
	const [pressBtn, setPressBtn] = useState(false);

	const rowSeats = [];

	for (let i = 0; i < 13; i++) {
		let white = require('../images/seatsAvailable/chair_black_white.png');
		let red = require('../images/seatsAvailable/chair_black_red.png');
		rowSeats.push(
			<View key={i.toString(5)} style={styles.seatsRow}>
				{(i === 2 || i === 3) && !pressBtn ? (
					<View style={styles.seatsCol}>
						<Image style={styles.seatImg} source={Math.round(Math.random()) === 1 ? white : red} />
						<Image style={styles.seatImg} source={Math.round(Math.random()) === 1 ? white : red} />
					</View>
				) : (
					<>
						<View style={styles.seatsCol}>
							<Image style={styles.seatImg} source={Math.round(Math.random()) === 1 ? white : red} />
							<Image style={styles.seatImg} source={Math.round(Math.random()) === 1 ? white : red} />
						</View>
						<View style={styles.seatsCol}>
							<Image style={styles.seatImg} source={Math.round(Math.random()) === 1 ? white : red} />
							<Image style={styles.seatImg} source={Math.round(Math.random()) === 1 ? white : red} />
						</View>
					</>
				)}
			</View>,
		);
	}

	useEffect(() => {
		setPressBtn(!pressBtn);
		pressBtn ? setTitle('Segundo') : setTitle('Primer');
	}, [rotateArrow]);

	return (
		<ImageBackground style={styles.bgImage} source={require('../images/pexels-bg.jpg')}>
			<View style={[styles.bgOpacity, styles.alignItems]}>
				<View style={styles.container}>
					<HeaderBar
						text={'Estado de los\nAsientos'}
						pathImg={require('../images/arrow_back_ios_black.png')}
						fn={() => props.navigation.navigate('home')}
					/>
					<View style={styles.body}>
						<View style={styles.bodyContainerSeats}>
							<Text style={styles.bodyContainerSeatsTitle}>{`${title} Piso`}</Text>
							{rowSeats}
						</View>
						<View style={styles.bodyContainerLeyend}>
							<View style={styles.leyendContainer}>
								<View style={styles.leyend}>
									<Image
										style={styles.leyendImg}
										source={require('../images/seatsAvailable/chair_black_white.png')}></Image>
									<Text style={styles.leyendText}>Disponible</Text>
								</View>
								<View style={styles.leyend}>
									<Image
										style={styles.leyendImg}
										source={require('../images/seatsAvailable/chair_black_red.png')}></Image>
									<Text style={styles.leyendText}>Ocupado</Text>
								</View>
							</View>
							<Pressable
								style={styles.btnContainer}
								onPress={() =>
									pressBtn
										? setRotateArrow({ transform: [{ rotate: '180deg' }] })
										: setRotateArrow({ transform: [{ rotate: '0deg' }] })
								}>
								<Image
									style={[styles.btnImg, rotateArrow]}
									source={require('../images/seatsAvailable/arrow_forward.png')}></Image>
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
		backgroundColor: 'rgba(221, 221, 221, 0.85);',
	},
	alignItems: {
		alignItems: 'center',
	},
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		height: '100%',
		width: '90%',
		minWidth: 240, // Galaxy Fold 280px
		maxWidth: 400,
		alignItems: 'center',
	},
	body: {
		flex: 1,
		flexDirection: 'row',
		flexGrow: 1,
		width: '100%',
	},
	bodyContainerSeats: {
		backgroundColor: COLORS.cardButtonFill,
		borderColor: COLORS.cardButtonStroke,
		borderWidth: 1,
		borderRadius: 5,
		maxWidth: '100%',
		justifyContent: 'space-around',
		marginBottom: 16,
	},
	bodyContainerSeatsTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: COLORS.white,
		textAlign: 'center',
	},
	seatsRow: {
		flexDirection: 'row',
	},
	seatsCol: {
		flexDirection: 'row',
		marginHorizontal: 8,
	},
	seatImg: {
		height: 40,
		width: 40,
		resizeMode: 'cover',
		marginHorizontal: 4,
	},

	bodyContainerLeyend: {
		flex: 1,
		justifyContent: 'center',
		// minWidth: 75,
	},
	leyendContainer: {
		flexGrow: 1,
		justifyContent: 'center',
	},
	leyend: {
		alignItems: 'center',
	},
	leyendImg: {
		height: 60,
		width: 60,
		resizeMode: 'cover',
	},
	leyendText: {
		color: COLORS.white,
		fontSize: 14,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	btnContainer: {
		position: 'absolute',
		alignItems: 'center',
		bottom: 25,
		width: '100%',
	},
	btnImg: {
		height: 75,
		width: 75,
		resizeMode: 'cover',
	},
});

export default SeatsAvailable;
