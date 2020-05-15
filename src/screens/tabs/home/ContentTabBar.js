import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import Colors from '@config/colors';
import {responsivePortion} from '@config/constants';
import ICONS from '@config/icons';
import {styles} from './styles';

export const ContentTabBar = ({
  labels,
  hasIcon,
  index,
  unselectedColor,
  onPress,
}) => {
  return (
    <>
      <View style={styles.tabViewHeader}>
        <TouchableOpacity
          style={[
            styles.rowView,
            {
              flex: 1,
              borderRadius: responsivePortion(2),
              justifyContent: 'center',
              paddingVertical: responsivePortion(7),
              backgroundColor:
                index === 0
                  ? Colors.blue
                  : unselectedColor
                  ? unselectedColor
                  : Colors.mainbackground,
            },
          ]}
          onPress={() => onPress(0)}>
          {hasIcon && (
            <Image
              source={ICONS.DOCUMENT}
              resizeMode="contain"
              style={[
                styles.tabViewIcon,
                {tintColor: index === 0 ? Colors.white : Colors.blue},
              ]}
            />
          )}
          <Text
            style={[
              styles.category,
              {color: index === 0 ? Colors.white : Colors.blue},
            ]}>
            {labels[0]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.rowView,
            {
              flex: 1,
              borderRadius: responsivePortion(2),
              justifyContent: 'center',
              paddingVertical: responsivePortion(7),
              backgroundColor:
                index === 1
                  ? Colors.blue
                  : unselectedColor
                  ? unselectedColor
                  : Colors.mainbackground,
            },
          ]}
          onPress={() => onPress(1)}>
          {hasIcon && (
            <Image
              source={ICONS.MELODY}
              resizeMode="contain"
              style={[
                styles.tabViewIcon,
                {tintColor: index === 1 ? Colors.white : Colors.blue},
              ]}
            />
          )}
          <Text
            style={[
              styles.category,
              {color: index === 1 ? Colors.white : Colors.blue},
            ]}>
            {labels[1]}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
