import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './style';
import { capitalizeFirstLetter } from '../../helpers/string';

const Header = ({ name, picture }) => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{ uri: picture.large}}
        style={styles.image}
      />
      <Text style={styles.name}>
        {capitalizeFirstLetter(name.first)} {capitalizeFirstLetter(name.last)}
      </Text>
    </View>
  )
};

export default Header;