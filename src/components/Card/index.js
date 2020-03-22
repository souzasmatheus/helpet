import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { imgPathGenerator } from '../../utils/index';

function Card({ movie, goToDetails, showInfo, style = {} }) {
  const { title, release_date, poster_path } = movie;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.outterContainer, Object.assign({}, style)]}
      onPress={() => goToDetails(movie)}
    >
      <ImageBackground
        source={{
          uri: imgPathGenerator(poster_path),
        }}
        style={styles.backgroundImage}
      >
        {showInfo && (
          <View style={styles.textContainer}>
            <View style={styles.textBackground}>
              <Text style={styles.nameText}>{title}</Text>
              <Text>{release_date ? release_date.split('-')[0] : ''}</Text>
            </View>
          </View>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default Card;
