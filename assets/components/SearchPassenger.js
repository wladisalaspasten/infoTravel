import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import COLORS from '../helpers/colors';
import HeaderBar from './HeaderBar';
import RadioButtonBar from './RadioButtonBar';
import Results from './Results';
import Input from './Input';
import Button from './Button';

const SearchPassenger = props => {
  console.log(props);
  return (
    <ImageBackground style={ styles.bgImage } source={ require('../images/pexels-bg.jpg') } >
      <View style={ [styles.bgOpacity, styles.alignItems] } >
        <HeaderBar
          text='Buscar Pasajero'
          pathImg={ require('../images/arrow_back_ios_black.png') }
          fn={ () => props.navigation.navigate('home') }
        />
        <View style={ styles.container }>
          <RadioButtonBar/>
          <View style={ styles.form }>
            <Input ph='Rut' foc={ false } kbTy='default'/>
            <Button value='Buscar' color={ COLORS.secondary }/>
          </View>
          <View style={ styles.results }>
           <Results/>
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
  }
});

export default SearchPassenger
