import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const PlaceDetail = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image
          style={styles.placeImage}
          source={props.selectedPlace ? props.selectedPlace.image : null}
        />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.handleModalClose} // android
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modelContainer}>
        {modalContent}
        <View>
          <Button
            title="Delete"
            color="red"
            onPress={props.handleItemDeleted}
          />
          <Button title="Close" onPress={props.handleModalClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modelContainer: {
    margin: 80
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
});

export default PlaceDetail;
