import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Image, TouchableOpacity, AsyncStorage } from 'react-native';
import emptyHeart from '../../../assets/images/empty-heart.png';
import fulfilledHeart from '../../../assets/images/fulfilled-heart.png';

import styles from './styles';

function Save({ style = {} }) {
  const selectedMovie = useSelector(state => state.selectedMovie);
  const [isSaved, setSaved] = useState(false);

  useEffect(() => {
    async function checkSaved() {
      try {
        const savedMovies =
          JSON.parse(await AsyncStorage.getItem('@savedMovies')) || [];

        setSaved(
          savedMovies.filter(movie => movie.id === selectedMovie.id).length > 0
        );
      } catch (err) {
        setSaved(false);
      }
    }

    checkSaved();
  }, []);

  const toggleSave = () => {
    AsyncStorage.getItem('@savedMovies').then(res => {
      const savedMovies = res ? JSON.parse(res) : [];

      if (isSaved) {
        const newState = savedMovies.filter(
          movie => movie.id !== selectedMovie.id
        );

        AsyncStorage.setItem(
          '@savedMovies',
          JSON.stringify(newState)
        ).then(() => setSaved(!isSaved));
      } else {
        const newState = [...savedMovies, selectedMovie];

        AsyncStorage.setItem(
          '@savedMovies',
          JSON.stringify(newState)
        ).then(() => setSaved(!isSaved));
      }
    });
  };

  return (
    <TouchableOpacity onPress={() => toggleSave()}>
      <Image
        style={[styles.img, { ...style }]}
        source={isSaved ? fulfilledHeart : emptyHeart}
      />
    </TouchableOpacity>
  );
}

export default Save;
