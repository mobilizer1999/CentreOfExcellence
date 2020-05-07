import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {STATUSBAR_HEIGHT} from '@config/statusbar';
import {DEVICE_SIZE} from '@config/constants';

const logoImg = require('@assets/logo/logo.png');

export const LogoView = () => (
  <View style={styles.container}>
    <Image source={logoImg} style={styles.logo} resizeMode="cover" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: (DEVICE_SIZE.HEIGHT * 5.5) / 24 - STATUSBAR_HEIGHT,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: DEVICE_SIZE.WIDTH / 5,
    height: DEVICE_SIZE.HEIGHT / 7,
  },
});
