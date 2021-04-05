import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import COLORS from '../helpers/colors';

const RadioButtonBar = () => {
  const [activeBtn, setActiveBtn] = useState('rut');

  const setActive = e => {
    let id = e.nativeEvent.target.textContent.slice(-1).toUpperCase();
    setActiveBtn(id);
  };

  useEffect(() => {
    // COMO ACCEDER A LOS ESTILOS DE UN COMPONENTE
    return () => {
      // cleanup
    }
  }, [activeBtn])

  return (
    <View style={ styles.containerBtnRadioBtn }>
      <Pressable style={ [styles.btnRadioBtn, styles.btnRadioBtnActive] } onPress={ setActive }>
        <Text style={ [styles.btnRadioBtnText, styles.btnRadioBtnTextActive] }>RUT</Text>
      </Pressable>
      <Pressable style={ styles.btnRadioBtnMiddle } onPress={ setActive }>
        <Text style={ styles.btnRadioBtnText }>N° BOLETO</Text>
      </Pressable>
      <Pressable style={ styles.btnRadioBtn } onPress={ setActive }>
        <Text style={ styles.btnRadioBtnText }>QR</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  containerBtnRadioBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: COLORS.secondary,
    overflow: 'hidden',
  },
  btnRadioBtn: {
    minWidth: 70,
  },
  btnRadioBtnMiddle: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderLeftColor: COLORS.secondary,
    borderRightColor: COLORS.secondary,
  },
  btnRadioBtnText: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.secondary,
    fontWeight: 'bold',
    margin: 16,
  },
  btnRadioBtnActive: {
    backgroundColor: COLORS.secondary,
  },
  btnRadioBtnTextActive: {
    color: COLORS.white,
  },
});

export default RadioButtonBar
