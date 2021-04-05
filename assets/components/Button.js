import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ styleAdditional, value, color, fn }) => {
  return (
    <TouchableOpacity style={ [styles.button, {backgroundColor: color}, styleAdditional]} onPress={fn}>
      <Text style={styles.buttonText}>{ value }</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 5,
    marginVertical: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  }
});

export default Button
