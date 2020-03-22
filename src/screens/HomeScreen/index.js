import React from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMovies } from '../../redux/actions';
import { fetchPathGenerator, imgPathGenerator } from '../../utils/index';

import styles from './styles';

import SearchInput from '../../components/SearchInput';
import Card from '../../components/Card';

function HomeScreen() {
  const movies = useSelector(state => state.movies);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch();

  const searchMovie = query => {
    dispatch(fetchMovies(fetchPathGenerator(query, '1')));
  };

  console.log(`
    movies: ${JSON.stringify(movies)},
    isLoading: ${isLoading},
    error: ${error}
  `);

  return (
    <View style={styles.container}>
      <SearchInput searchMovie={searchMovie} />
      <View style={styles.contentContainer}>
        {!isLoading && movies.length === 0 && <Text>No searches yet</Text>}
        {isLoading && <ActivityIndicator />}
        {!isLoading && movies.length > 0 && (
          <FlatList
            style={styles.flatList}
            data={movies}
            renderItem={({ item }) => (
              <Card
                style={{ marginBottom: 10 }}
                movieName={item.title}
                year={item.release_date.split('-')[0] || ''}
                imgPath={imgPathGenerator(item.poster_path)}
              />
            )}
            keyExtractor={item => `separator-${item.id}`}
          />
        )}
      </View>
    </View>
  );
}

export default HomeScreen;
