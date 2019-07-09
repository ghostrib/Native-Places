import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import UserInput from './src/components/UserInput';
import PlaceList from './src/components/PlacesList';
import PlaceDetail from './src/components/PlaceDetail';
// import placeImage from './src/assets/beautiful-places.jpg';

export default class App extends Component {
  state = {
    text: '',
    places: [],
    selectedPlace: null
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
            name: prevState.text,
            //image: placeImage
            image: {
              uri:
                'https://img.theculturetrip.com/768x432/wp-content/uploads/2016/03/suspension-bridge-1149942_1280.jpg'
            }
          })
        };
      });
    }
  };

  handleItemSelected = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  handleItemDeleted = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  handleModalClose = () => {
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    const { text, places, selectedPlace } = this.state;
    const {
      handleInputChange,
      handleButtonPress,
      handleItemSelected,
      handleItemDeleted,
      handleModalClose
    } = this;

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={selectedPlace}
          handleItemDeleted={handleItemDeleted}
          handleModalClose={handleModalClose}
        />
        <UserInput
          text={text}
          handleInputChange={handleInputChange}
          handleButtonPress={handleButtonPress}
        />
        <PlaceList places={places} handleItemSelected={handleItemSelected} />
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
