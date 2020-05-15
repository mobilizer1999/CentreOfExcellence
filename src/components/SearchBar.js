import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {
  responsivePortion,
  responsiveVerticalPortion,
  FONTS,
} from '@config/constants';
import ICONS from '@config/icons';
import Colors from '@config/colors';

export const SearchBar = ({search, placeholder, onChange, onPress}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      value={search}
      placeholder={placeholder}
      placeholderTextColor={Colors.disabled}
      underlineColorAndroid="transparent"
      autoCorrect
      autoCapitalize="none"
      keyboardType="default"
      returnKeyType="done"
      onChangeText={(text) => {
        onChange(text);
      }}
    />
    <TouchableHighlight>
      <Image source={ICONS.SEARCH} style={styles.icon} resizeMode="contain" />
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: responsiveVerticalPortion(32),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: responsivePortion(2),
    borderWidth: 1,
    borderColor: Colors.disabled,
    paddingHorizontal: responsivePortion(16),
  },
  input: {
    flex: 1,
    height: '100%',
    fontFamily: FONTS.main,
    fontSize: responsivePortion(10),
    fontWeight: 'normal',
    color: Colors.black,
    letterSpacing: responsivePortion(0.33),
  },
  icon: {
    width: responsivePortion(12),
    height: responsivePortion(12),
    tintColor: Colors.black,
  },
});
