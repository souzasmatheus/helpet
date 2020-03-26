import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';

import styles from './styles';

function DetailsScreen() {
  const selectedMovie = useSelector(state => state.selectedMovie);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card movie={selectedMovie} goToDetails={f => f} />
      <View style={styles.infoContainer}>
        <Text style={styles.textGroup}>
          <Text style={styles.infoHeading}>Overview: </Text>
          {selectedMovie.overview}
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.infoHeading}>Popularity: </Text>
          {selectedMovie.popularity}
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.infoHeading}>Original Language: </Text>
          {selectedMovie.original_language}
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.infoHeading}>Release Date: </Text>
          {selectedMovie.release_date}
        </Text>
      </View>
    </ScrollView>
  );
}

export default DetailsScreen;
