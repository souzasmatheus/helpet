import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

import SearchIcon from '../../../assets/images/search.png';

function SearchInput() {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Pesquisar filme" style={styles.input} />
      <TouchableOpacity>
        <Image source={SearchIcon} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
}

export default SearchInput;
