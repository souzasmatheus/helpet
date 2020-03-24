import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import emptyHeart from '../../../assets/images/empty-heart.png';
import fulfilledHeart from '../../../assets/images/fulfilled-heart.png';

import styles from './styles';

function Save({ style = {} }) {
  const [isSaved, setSaved] = useState(false);

  const toggleSave = () => {
    setSaved(!isSaved);
  };

  return (
    <TouchableOpacity onPress={() => toggleSave()}>
      <Image
        style={[styles.img, Object.assign({}, style)]}
        source={isSaved ? fulfilledHeart : emptyHeart}
      />
    </TouchableOpacity>
  );
}

export default Save;
