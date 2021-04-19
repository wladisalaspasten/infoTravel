import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import COLORS from '../helpers/colors';
import Button from './Button';
import CardRowText from './CardRowText';
import CardRowInput from './CardRowInput';
import CardRowInputAdmin from './CardRowInputAdmin';

const PassengerCards = ({ information, screen, navigation }) => {
	const resultsquantity = information.length;
	const rowCard = [];

	const UpdatePassenger = Rut => {
		navigation.navigate('update passenger', { Rut });
	};

	switch (screen) {
		case 'search passenger':
			information.map((data, index) => {
				let rowDataCard = [];
				rowCard.push(
					<View key={index.toString(2)} style={styles.result}>
						{Object.entries(data).map(([prop, val], indx) => {
							rowDataCard.push(<CardRowText key={indx.toString(3)} prop={prop} val={val} />);
						})}
						{rowDataCard}
						<View style={styles.resultBtnContainer}>
							<Button
								styleAdditional={styles.resultBtn}
								value='Act. Datos'
								color={COLORS.secondary}
								onPress={() => UpdatePassenger(data.Rut)}
							/>
							<Button styleAdditional={styles.resultBtn} value='Confirmar' color={COLORS.green} />
						</View>
					</View>,
				);
			});
			break;
		case 'update passenger':
			rowCard.push(<CardRowInput key={Number(0).toString(4)} information={information} />);
			break;
		case 'update employee':
			rowCard.push(<CardRowInputAdmin key={Number(0).toString(4)} information={information} />);
			break;
	}

	// if (screen === 'update passenger' && information) {
	// 	if (Object.keys(information).length > 0) {
	// 	}
	// } else {

	// }

	return (
		<View style={styles.container}>
			{screen === 'search passenger' && (
				<Text style={styles.resultsQuantity}>
					{resultsquantity <= 1 ? `${resultsquantity} Resultado` : `${resultsquantity} Resultados`}
				</Text>
			)}
			<ScrollView style={styles.scroll}>{rowCard}</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	resultsQuantity: {
		color: COLORS.white,
		fontSize: 16,
		textAlign: 'right',
	},
	scroll: {
		flexGrow: 1,
	},
	result: {
		backgroundColor: COLORS.cardButtonFill,
		borderColor: COLORS.cardButtonStroke,
		borderWidth: 1,
		borderRadius: 5,
		maxWidth: '100%',
		padding: 8,
		marginBottom: 8,
		borderWidth: 3,
	},
	resultBtnContainer: {
		flexDirection: 'row',
		width: '100%',
	},
	resultBtn: {
		flexGrow: 1,
		marginHorizontal: 4,
	},
});

export default PassengerCards;
