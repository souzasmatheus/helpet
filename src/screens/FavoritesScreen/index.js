import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, AsyncStorage } from 'react-native';
import { useDispatch } from 'react-redux';

import { setSelectedMovie } from '../../redux/actions';

import styles from './styles';

import Card from '../../components/Card';

function FavoritesScreen({ navigation }) {
  const [isMounted, setIsMounted] = useState(true);
  const [savedMovies, setSavedMovies] = useState([]);
  const dispatch = useDispatch();

  const goToDetails = movie => {
    dispatch(setSelectedMovie(movie));
    navigation.navigate('Details', {
      title: movie.title,
    });
  };

  useEffect(() => {
    async function getSavedMovies() {
      try {
        const savedMovies =
          JSON.parse(await AsyncStorage.getItem('@savedMovies')) || [];

        if (isMounted) setSavedMovies(savedMovies);
      } catch (error) {
        if (isMounted) setSavedMovies([]);
      }
    }

    getSavedMovies();

    return () => setIsMounted(false);
  });

  return (
    <View style={styles.container}>
      {savedMovies.length === 0 && <Text>No movie has been saved yet</Text>}
      {savedMovies.length > 0 && (
        <FlatList
          contentContainerStyle={styles.flatList}
          data={savedMovies}
          renderItem={({ item }) => (
            <Card
              showInfo
              style={{ marginTop: 10 }}
              movie={item}
              goToDetails={goToDetails}
            />
          )}
          keyExtractor={item => `separator-${item.id || item.title}`}
        />
      )}
    </View>
  );
}

export default FavoritesScreen;
