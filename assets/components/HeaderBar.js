import React from 'react'
import { Text, StyleSheet, Pressable, Image } from 'react-native';
import COLORS from '../helpers/colors';

const HeaderBar = ({ text, pathImg, fn }) => {
  return (
    <Pressable style={ styles.containerTitle } onPress={ fn }>
      <Image style={ styles.arrowBack } source={ pathImg } />
      <Text style={ styles.title }>{ text }</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 16,
  },
  title: {
    fontSize: 32,
    flexGrow: 1,
    color: COLORS.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  arrowBack: {
    flexGrow: 0,
    height: 40,
    width: 40,
  }
});


export default HeaderBar
