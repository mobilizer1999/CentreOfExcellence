import React from 'react';
import {View, TouchableHighlight, Image, Text, StyleSheet} from 'react-native';
import Colors from '@config/colors';
import {responsivePortion, FONTS} from '@config/constants';

const tvIcon = require('@assets/icons/facebook.png');
const mapIcon = require('@assets/icons/google.png');
const userIcon = require('@assets/icons/back.png');

const iconMap = {
  Home: {
    label: 'Home',
    icon: tvIcon,
  },
  Wishlist: {
    label: 'Wishlist',
    icon: mapIcon,
  },
  MyCourses: {
    label: 'My Courses',
    icon: userIcon,
  },
  Messages: {
    label: 'Messages',
    icon: userIcon,
  },
  Accounts: {
    label: 'Accounts',
    icon: userIcon,
  },
};

export default function TabBarButton({routeName, onPress, focused}) {
  return (
    <TouchableHighlight
      style={[
        styles.container,
        {backgroundColor: focused ? Colors.background : Colors.blue},
      ]}
      underlayColor={Colors.background}
      onPress={onPress}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={iconMap[routeName].icon}
          resizeMode="contain"
          style={styles.icon}
        />
        {focused && (
          <Text style={styles.label}>{iconMap[routeName].label}</Text>
        )}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    marginTop: -1,
  },
  icon: {
    width: responsivePortion(18),
    height: responsivePortion(18),
    tintColor: Colors.white,
  },
  label: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(13),
    fontWeight: '600',
    color: Colors.white,
    marginTop: 2,
  },
});
