import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import {Picker} from 'native-base';
import {responsivePortion, FONTS} from '@config/constants';
import Colors from '@config/colors';
const downIcon = require('@assets/icons/down.png');

const PickerField = ({
  style,
  value,
  width,
  data,
  iconpos,
  color,
  onValueChange,
}) => (
  <View style={[styles.container, style]}>
    <Text style={[styles.value, {color: color ? color : Colors.white}]}>
      {data[value]?.label}
    </Text>
    <Image
      source={downIcon}
      resizeMode="contain"
      style={[
        styles.androidIcon,
        {
          tintColor: color ? color : Colors.white,
          right: iconpos ? iconpos : responsivePortion(8),
        },
      ]}
    />
    <Picker
      mode="dropdown"
      placeholder={value}
      style={[
        styles.picker,
        {
          width,
          left: Platform.OS === 'ios' ? responsivePortion(-width / 2.45) : 0,
        },
      ]}
      textStyle={[styles.value, {opacity: 0}]}
      selectedValue={value}
      onValueChange={onValueChange}>
      {data.map((item, index) => (
        <Picker.Item
          label={item.label}
          value={item.value}
          key={`key${index}`}
        />
      ))}
    </Picker>
  </View>
);
export default PickerField;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? responsivePortion(-18) : 0,
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    // borderWidth: 1,
    opacity: 0,
    zIndex: 10,
  },
  value: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(12),
    color: Colors.white,
  },
  androidIcon: {
    width: responsivePortion(11),
    height: responsivePortion(7),
    tintColor: Colors.white,
    position: 'absolute',
    right: responsivePortion(8),
  },
});
