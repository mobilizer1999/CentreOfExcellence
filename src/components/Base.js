import React from 'react';
import {View, StyleSheet} from 'react-native';
import {STATUSBAR_HEIGHT} from '@config/statusbar';
import Colors from '@config/colors';

export const BaseView = ({children}) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: Colors.background,
  },
});
