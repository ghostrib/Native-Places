import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const PlaceList = ({ places, deleteItem }) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={info => (
        <ListItem
          place={info.item.value}
          deleteItem={() => deleteItem(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default PlaceList;
