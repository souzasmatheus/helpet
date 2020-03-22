import React from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

function DetailsScreen() {
  const selectedMovie = useSelector(state => state.selectedMovie);

  return (
    <View style={styles.container}>
      <Text>{selectedMovie.title}</Text>
    </View>
  );
}

export default DetailsScreen;
