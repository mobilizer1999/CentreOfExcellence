import React from 'react';
import {
  View,
  Platform,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Picker, Icon} from 'native-base';
import {
  responsivePortion,
  responsiveVerticalPortion,
  FONTS,
} from '@config/constants';
import Colors from '@config/colors';
const downIcon = require('@assets/icons/down.png');

const PickerField = ({style, value, data, onValueChange}) => (
  <View style={style}>
    <Picker
      mode="dropdown"
      style={styles.picker}
      iosIcon={
        <Image source={downIcon} resizeMode="contain" style={styles.icon} />
      }
      itemStyle={styles.value}
      selectedValue={value}
      onValueChange={onValueChange}>
      {data.map((item, index) => (
        <Picker.Item
          style={styles.value}
          label={item.label}
          value={item.value}
          key={`key${index}`}
        />
      ))}
    </Picker>
    {Platform.OS === 'android' && (
      <Image
        source={downIcon}
        resizeMode="contain"
        style={styles.androidIcon}
      />
    )}
  </View>
);
export default PickerField;

const styles = StyleSheet.create({
  picker: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
  },
  value: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(16),
    color: Colors.white,
  },
  icon: {
    width: responsivePortion(18),
    height: responsivePortion(18),
    tintColor: Colors.white,
  },
  androidIcon: {
    width: responsivePortion(18),
    height: responsivePortion(18),
    tintColor: Colors.white,
    position: 'absolute',
    right: responsivePortion(8),
  },
});
