import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const UserInput = ({ handleInputChange, handleButtonPress, text }) => (
  <View style={styles.inputContainer}>
    <TextInput
      placeholder="type here..."
      style={styles.textInput}
      value={text}
      onChangeText={handleInputChange}
    />
    <Button
      style={styles.addButton}
      onPress={handleButtonPress}
      title="Add"
      accessibilityLabel="Learn more about buttons..."
    />
  </View>
);

const styles = StyleSheet.create({
  textInput: {
    width: '70%',
    height: 24,
    fontSize: 16,
    backgroundColor: 'whitesmoke',
    borderRadius: 4
  },
  addButton: {
    width: '30%'
  },
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default UserInput;
