import React from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMovies, setSelectedMovie } from '../../redux/actions';
import { fetchPathGenerator } from '../../utils/index';

import styles from './styles';

import SearchInput from '../../components/SearchInput';
import Card from '../../components/Card';

function HomeScreen({ navigation }) {
  const movies = useSelector(state => state.movies);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch();

  const searchMovie = query => {
    dispatch(fetchMovies(fetchPathGenerator(query, '1')));
  };

  const goToDetails = movie => {
    dispatch(setSelectedMovie(movie));
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <SearchInput searchMovie={searchMovie} />
      <View style={styles.contentContainer}>
        {!isLoading && !error && movies.length === 0 && (
          <Text>No searches yet</Text>
        )}
        {isLoading && <ActivityIndicator />}
        {!isLoading && movies.length > 0 && (
          <FlatList
            style={styles.flatList}
            data={movies}
            renderItem={({ item }) => (
              <Card style={{ marginBottom: 10 }} movie={item} />
            )}
            keyExtractor={item => `separator-${item.id}`}
          />
        )}
        {!isLoading && error && (
          <Text>There has been an error. Please, try again!</Text>
        )}
      </View>
    </View>
  );
}

export default HomeScreen;
