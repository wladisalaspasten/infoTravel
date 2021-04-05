import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import COLORS from '../helpers/colors';
import Button from './Button';

const Results = () => {
  return (
    <>
      <Text style={ styles.quantityResults }>1 Resultado</Text>
      <View style={ styles.result }>
        <View style={ styles.resultRow }>
          <Text style={ styles.column1 }>Nombre</Text>
          <Text style={ styles.column2 }>Jane Doe</Text>
        </View>
        <View style={ styles.resultBtnContainer }>
          <Button styleAdditional={ styles.resultBtn } value='Act. Datos' color={ COLORS.secondary }/>
          <Button styleAdditional={ styles.resultBtn } value='Confirmar' color={ COLORS.green }/>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  quantityResults: {
    position: 'absolute',
    top: -20,
    right: 0,
    color: COLORS.white,
    fontSize: 16,
  },
  result: {
    backgroundColor: COLORS.cardButtonFill,
    borderColor: COLORS.cardButtonStroke,
    borderWidth: 1,
    borderRadius: 5,
    maxWidth: '100%',
    padding: 8,
    marginBottom: 8,
  },
  resultRow: {
    flexDirection: 'row',
  },
  column1: {
    flexGrow: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  column2: {
    flexGrow: 2,
    fontSize: 24,
    color: COLORS.white,
  },
  resultBtnContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  resultBtn: {
    flexGrow: 1,
    marginHorizontal: 4
  }
});

export default Results
