import React from 'react';
import {View, TouchableHighlight, Image, Text, StyleSheet} from 'react-native';
import Colors from '@config/colors';
import {responsivePortion, FONTS} from '@config/constants';
import ICONS from '@config/icons';

const iconMap = {
  Home: {
    label: 'Home',
    icon: ICONS.HOME_TAB,
    tintIcon: ICONS.HOME_TAB_TINT,
  },
  Wishlist: {
    label: 'Wishlist',
    icon: ICONS.LOVE_TAB,
    tintIcon: ICONS.LOVE_TAB_TINT,
  },
  MyCourses: {
    label: 'My Courses',
    icon: ICONS.COURSE_TAB,
    tintIcon: ICONS.COURSE_TAB_TINT,
  },
  Messages: {
    label: 'Messages',
    icon: ICONS.MESSAGE_TAB,
    tintIcon: ICONS.MESSAGE_TAB,
  },
  Accounts: {
    label: 'Accounts',
    icon: ICONS.USER_TAB,
    tintIcon: ICONS.USER_TAB,
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
        {(routeName === 'Wishlist' || routeName === 'MyCourses') && (
          <View
            style={[
              styles.noti,
              {
                right:
                  routeName === 'Wishlist'
                    ? responsivePortion(4)
                    : responsivePortion(10),
              },
            ]}
          />
        )}
        <Image
          source={
            focused ? iconMap[routeName].tintIcon : iconMap[routeName].icon
          }
          resizeMode="contain"
          style={styles.icon}
        />
        <Text style={styles.label}>{iconMap[routeName].label}</Text>
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
  noti: {
    position: 'absolute',
    top: responsivePortion(-4),
    right: responsivePortion(4),
    width: responsivePortion(8),
    height: responsivePortion(8),
    borderRadius: responsivePortion(4),
    backgroundColor: Colors.red,
    zIndex: 1,
  },
});
