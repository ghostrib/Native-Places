import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({ place, deleteItem }) => (
  <TouchableOpacity onPress={deleteItem}>
    <View style={styles.listItem}>
      <Text>{place}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#eee'
  }
});

export default ListItem;
