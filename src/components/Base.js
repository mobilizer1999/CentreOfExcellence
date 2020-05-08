import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {STATUSBAR_HEIGHT} from '@config/statusbar';
import Colors from '@config/colors';

export const BaseView = ({children, style}) => (
  <Animated.View style={[styles.container, style]}>{children}</Animated.View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: Colors.background,
  },
});
