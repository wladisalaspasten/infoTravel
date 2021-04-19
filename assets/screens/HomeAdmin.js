import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Pressable } from 'react-native';
import COLORS from '../helpers/colors';
import Button from '../components/Button';
import CardButtonAdmin from '../components/CardButtonAdmin';
import Modal from '../components/Modal';

const Home = props => {
	return (
		<ImageBackground style={styles.bgImage} source={require('../images/pexels-bg.jpg')}>
			<View style={[styles.bgOpacity, styles.alignItems]}>
				<View style={styles.container}>
					<View style={styles.headContainer}>
						<Text style={styles.headTitle}>Inicio</Text>
						<Modal />
					</View>
					<View style={styles.containerCardButton}>
						<View style={styles.cardButtonCol}>
							<CardButtonAdmin text='Buscar Pasajero' fn={() => props.navigation.navigate('search passenger')} />
							<CardButtonAdmin text='Buscar Auxiliar' fn={() => props.navigation.navigate('update employee')} />
						</View>
						<View style={styles.cardButtonCol}>
							<CardButtonAdmin text='Editar Datos Pasajero' fn={() => props.navigation.navigate('update passenger')} />
							<CardButtonAdmin
								text='Estado de los Asientos'
								fn={() => props.navigation.navigate('view seats available')}
							/>
						</View>
					</View>
					<View style={styles.containerBtn}>
						<Button value='Cerrar Sesión' color={COLORS.red} onPress={() => props.navigation.navigate('login')} />
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
	headContainer: {
		flexDirection: 'row',
		marginVertical: 16,
		width: '100%',
		justifyContent: 'center',
	},
	headTitle: {
		fontSize: 32,
		color: COLORS.secondary,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	containerCardButton: {
		width: '100%',
		flexGrow: 1,
		justifyContent: 'center',
	},
	cardButtonCol: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: 8,
	},
	containerBtn: {
		paddingHorizontal: 16,
		width: '100%',
	},
});

export default Home;
