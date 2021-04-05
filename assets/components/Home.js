import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import COLORS from "../helpers/colors";
import CardButton from "./CardButton";
import Button from "./Button";

const Home = props => {
  console.log(props);
  return (
    <ImageBackground style={styles.bgImage} source={require('../images/pexels-bg.jpg')} >
      <View style={ [styles.bgOpacity, styles.alignItems] } >
        <View style={ styles.container }>
          <View style={ styles.containerTitle }>
            <Text style={ styles.title }>Inicio</Text>
          </View>
          <View style={ styles.containerCardButton }>
            <CardButton
              dir='L'
              text='Buscar Pasajero'
              pathImg={ require('../images/home/undraw_personal_info.png') }
              fn={ () => props.navigation.navigate('search passenger') }
            />
            <CardButton
              dir='R'
              text='Editar Datos Pasajero'
              pathImg={ require('../images/home/undraw_Updated_resume.png') }
              fn={ () => props.navigation.navigate('update passenger') }
            />
            <CardButton
              dir='L'
              text='Ver Estado de los Asientos'
              pathImg={ require('../images/home/undraw_team.png') }
              fn={ () => props.navigation.navigate('view seats available') }
            />
          </View>
          <View style={ styles.containerBtn}>
            <Button value='Cerrar Sesión' color={ COLORS.red } fn={ () => props.navigation.navigate('login') }/>
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
    alignItems: 'center'
  },
  container: {
    display: "flex",
    justifyContent: 'space-between',
    height: "100%",
    width: "90%",
    minWidth: 240, // Galaxy Fold 280px
    maxWidth: 400,
    alignItems: "center",
  },
  containerTitle: {
    marginVertical: 16,
  },
  title: {
    fontSize: 32,
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
  containerCardButton: {
    flexBasis: 0,
    flexGrow: 1,
  },
  containerBtn: {
    paddingHorizontal: 16,
    width: '100%',
  }
});

export default Home;
