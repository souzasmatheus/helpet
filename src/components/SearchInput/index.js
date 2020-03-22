import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

import SearchIcon from '../../../assets/images/search.png';

function SearchInput({ searchMovie }) {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={text => setQuery(text)}
        placeholder="Pesquisar filme"
        style={styles.input}
      />
      <TouchableOpacity onPress={() => searchMovie(query)}>
        <Image source={SearchIcon} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
}

export default SearchInput;
