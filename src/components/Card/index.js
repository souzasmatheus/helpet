import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Card({ movieName, year, imgPath }) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.outterContainer}>
      <ImageBackground
        source={{
          uri:
            imgPath,
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.textContainer}>
          <View style={styles.textBackground}>
            <Text style={styles.nameText}>{movieName}</Text>
            <Text>{year}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default Card;
