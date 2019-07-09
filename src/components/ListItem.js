import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = ({ place, deleteItem, placeImage }) => (
  <TouchableOpacity onPress={deleteItem}>
    <View style={styles.listItem}>
      <Image source={placeImage} style={styles.placeImage} resizeMode="cover" />
      <Text>{place}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    marginRight: 8,
    width: 30,
    height: 30
  }
});

export default ListItem;
