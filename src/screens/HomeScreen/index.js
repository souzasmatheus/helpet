import React, { useState } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchMovies,
  setSelectedMovie,
  fetchMoreMovies,
} from '../../redux/actions';
import { fetchPathGenerator } from '../../utils/index';

import styles from './styles';

import SearchInput from '../../components/SearchInput';
import Card from '../../components/Card';

function HomeScreen({ navigation }) {
  const movies = useSelector(state => state.movies);
  const totalPages = useSelector(state => state.totalPages);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const isLoadingMore = useSelector(state => state.isLoadingMore);
  const errorLoadingMore = useSelector(state => state.errorLoadingMore);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState(1);

  const dispatch = useDispatch();

  const searchMovie = incomingQuery => {
    setQuery(incomingQuery);
    dispatch(fetchMovies(fetchPathGenerator(incomingQuery, '1')));
  };

  const goToDetails = movie => {
    dispatch(setSelectedMovie(movie));
    navigation.navigate('Details', {
      title: movie.title,
    });
  };

  const loadMore = () => {
    if (currentPage + 1 > totalPages) {
      return;
    }
    dispatch(fetchMoreMovies(fetchPathGenerator(query, currentPage + 1)));
    setCurrentPage(currentPage + 1);
  };

  const renderFooter = () =>
    !isLoadingMore &&
    errorLoadingMore && (
      <View style={{ alignItems: 'center' }}>
        <Text>There has been an error loading more</Text>
      </View>
    );

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
              <Card
                showInfo
                style={{ marginBottom: 10 }}
                movie={item}
                goToDetails={goToDetails}
              />
            )}
            keyExtractor={item => `card-${item.id}`}
            onEndReached={() => loadMore()}
            onEndReachedThreshold={0.5}
            initialNumToRender={10}
            ListFooterComponent={() => renderFooter()}
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
