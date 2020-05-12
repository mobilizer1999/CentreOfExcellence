import React from 'react';
import {View, TouchableHighlight, Image, Text, StyleSheet} from 'react-native';
import Colors from '@config/colors';
import {responsivePortion, FONTS} from '@config/constants';
import ICONS from '@config/icons';

const iconMap = {
  Home: {
    label: 'Home',
    icon: ICONS.HOME_TAB,
  },
  Wishlist: {
    label: 'Wishlist',
    icon: ICONS.LOVE_TAB,
  },
  MyCourses: {
    label: 'My Courses',
    icon: ICONS.COURSE_TAB,
  },
  Messages: {
    label: 'Messages',
    icon: ICONS.MESSAGE_TAB,
  },
  Accounts: {
    label: 'Accounts',
    icon: ICONS.USER_TAB,
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
        {/* {focused && ( */}
        <Text style={styles.label}>{iconMap[routeName].label}</Text>
        {/* )} */}
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
    width: responsivePortion(16),
    height: responsivePortion(12),
    tintColor: Colors.white,
  },
  label: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(8),
    fontWeight: '600',
    color: Colors.white,
    marginTop: 2,
  },
});
