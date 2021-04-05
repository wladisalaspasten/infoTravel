import React from 'react'
import { Text, StyleSheet, Pressable, Image } from 'react-native';
import COLORS from '../helpers/colors';

const CardButton = ( { dir, text, pathImg, fn } ) => {

      if(dir === 'L'){
        return (
        <Pressable style={ styles.cardButton } onPress={ fn }>
          <Text style={ styles.cardButtonTitle }>{ text }</Text>
          <Image style={ styles.cardButtonImage } source={ pathImg } />
        </Pressable>
        );
      } else{
        return (
        <Pressable style={ styles.cardButton } onPress={ fn }>
          <Image style={ styles.cardButtonImage } source={ pathImg } />
          <Text style={ styles.cardButtonTitle }>{ text }</Text>
        </Pressable>
        );
      };
}

const styles = StyleSheet.create({
  containerCardButton: {
    flexBasis: 0,
    flexGrow: 1,
  },
  cardButton: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.cardButtonFill,
    borderColor: COLORS.cardButtonStroke,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    maxWidth: '100%',
    padding: 8,
    marginBottom: 8,
  },
  cardButtonTitle: {
    fontSize: 28,
    color: COLORS.white,
    width: 150,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardButtonImage: {
    height: 120,
    width: 150,
    resizeMode: 'stretch',
  }
});

export default CardButton
