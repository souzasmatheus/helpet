import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function NavigateIcon({ goTo, imgSource, style = {} }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={style} onPress={() => navigation.navigate(goTo)}>
      <Image source={imgSource} style={styles.img} />
    </TouchableOpacity>
  );
}

export default NavigateIcon;
