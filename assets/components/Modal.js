import React, { useState } from 'react';
import { Image, Modal as ModalComponent, Pressable, Text, StyleSheet, View } from 'react-native';
import Button from './Button';
import COLORS from '../helpers/colors';

function Modal({ customStyle }) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<Pressable style={[styles.headBtn, customStyle]} onPress={() => setModalVisible(!modalVisible)}>
				<Image style={styles.headImg} source={require('../images/home/help_outline.png')} />
			</Pressable>

			<ModalComponent
				animationType='fade'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centerModal}>
					<View style={styles.modal}>
						<View style={styles.modalHead}>
							<Text style={styles.modalTitle}>Mesa de Servicio</Text>
						</View>
						<View style={styles.modalBody}>
							<Text style={styles.bodyText}>Contáctatos en...</Text>
							<Text style={styles.modalTitle} dataDetectorType='email'>
								soporte@smartsoftware.cl
							</Text>
						</View>
						<View style={styles.modalFooter}>
							<Button value='Cerrar Ventana' color={COLORS.red} onPress={() => setModalVisible(!modalVisible)} />
						</View>
					</View>
				</View>
			</ModalComponent>
		</>
	);
}

const styles = StyleSheet.create({
	headBtn: {
		position: 'absolute',
		right: 10,
	},
	headImg: {
		height: 45,
		width: 45,
		resizeMode: 'center',
	},
	centerModal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#11111150',
	},
	modal: {
		backgroundColor: COLORS.white,
		borderRadius: 10,
		padding: 8,
		width: '70%',
	},
	modalHead: {
		marginVertical: 16,
	},
	modalTitle: {
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
	},
	modalBody: {
		marginVertical: 16,
	},
	bodyText: {
		fontSize: 16,
		textAlign: 'center',
	},
	footerBtn: {},
	btnText: {},
});

export default Modal;
