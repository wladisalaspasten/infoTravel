import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import COLORS from '../helpers/colors';

const Input = ({ph, foc, kbTy}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={ph}
      autoFocus={foc}
      type='outline'
      keyboardType= {kbTy}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    padding: 8,
    marginVertical: 8,
  },
  inputFocus: {
    borderWidth: 1.5,
    borderColor: COLORS.main,
    borderStyle: 'solid',
  },
});

export default Input
