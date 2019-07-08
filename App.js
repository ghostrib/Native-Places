import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import UserInput from './src/components/UserInput';
import PlaceList from './src/components/PlacesList';

export default class App extends Component {
  state = {
    text: '',
    places: []
  };

  handleInputChange = text => {
    this.setState({ text });
  };

  handleButtonPress = () => {
    if (this.state.text.trim() !== '') {
      this.setState(prevState => {
        return {
          places: prevState.places.concat({
            key: Math.random().toString(),
            value: prevState.text
          })
        };
      });
    }
  };

  deleteItem = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  };

  render() {
    const { text, places } = this.state;
    const { handleInputChange, handleButtonPress, deleteItem } = this;

    return (
      <View style={styles.container}>
        <UserInput
          text={text}
          handleInputChange={handleInputChange}
          handleButtonPress={handleButtonPress}
        />
        <PlaceList places={places} deleteItem={deleteItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
