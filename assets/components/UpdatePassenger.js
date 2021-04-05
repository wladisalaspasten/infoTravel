import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import COLORS from '../helpers/colors';
import Button from './Button';

const UpdatePassenger = props => {
  console.log(props);
  return (
    <ImageBackground style={styles.bgImage} source={require('../images/pexels-bg.jpg')} >
      <View style={ [styles.bgOpacity, styles.alignItems] } >
        <View style={ styles.container }>
          <View style={ styles.containerTitle }>
            <Text style={ styles.title }>Buscar Pasajero</Text>
          </View>
          <View style={ styles.containerCardButton }>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

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
    alignItems: 'center'
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
  containerTitle: {
    marginVertical: 16,
  },
  title: {
    fontSize: 32,
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
});


export default UpdatePassenger
