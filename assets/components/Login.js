import React from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import Input from './Input';
import Button from './Button';
import COLORS from '../helpers/colors';

const Login = props => {
  return (
    <ImageBackground style={styles.bgImage} source={require('../images/pexels-bg.jpg')} >
      <View style={ [styles.bgOpacity, styles.alignItems] } >
        <View style={styles.container} >
          <View style={styles.containerLogo} >
            <Image style={styles.logo} source={require('../images/login/directions_bus.png')}/>
          </View>
          <View style={styles.containerForm}>
            <Input ph='Rut' foc={true} kbTy='number-pad' />
            <Input ph='Contraseña' foc={false} kbTy='default' />
            <Button value='Ingresar' color={COLORS.main} fn={ () => props.navigation.navigate('home', { name: 'Jane' }) } />
          </View>
        </View>
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'stretch', // 'cover' or 'stretch'
  },
  bgOpacity: {
    flex: 1,
    backgroundColor: 'rgba(221, 221, 221, 0.8);',
  },
  alignItems: {
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    height: '100%',
    width: '80%',
    minWidth: 240, // Galaxy Fold 280px
    maxWidth: 400,
    alignItems: 'center'
  },
  containerLogo: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1
  },
  logo: {
    height: 75,
    width: 75,
  },
  containerForm: {
    width: '100%',
    flexGrow: 1
  },
  border: { 
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  }
});


export default Login
