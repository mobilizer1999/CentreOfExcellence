import React from 'react';
import {View, Image, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {Slider} from 'react-native-elements';
import Colors from '@config/colors';
import {responsivePortion, FONTS} from '@config/constants';
import ICONS from '@config/icons';

const AudioPlayer = ({style, progress, total}) => (
  <View style={[styles.container, style]}>
    <TouchableHighlight>
      <Image source={ICONS.PLAY} resizeMode="contain" style={styles.icon} />
    </TouchableHighlight>
    <Text style={styles.text}>00:09</Text>
    <Slider
      style={styles.slider}
      value={9}
      maximumTrackTintColor={Colors.white}
      minimumTrackTintColor="#88C7FF"
      minimumValue={0}
      maximumValue={58}
      step={1}
      // disabled
      thumbTintColor={Colors.background}
      trackStyle={{
        height: responsivePortion(9),
        borderRadius: responsivePortion(5),
      }}
      thumbStyle={{width: responsivePortion(10), height: responsivePortion(10)}}
    />
    <Text style={styles.text}>00:58</Text>
    <TouchableHighlight>
      <Image source={ICONS.AUDIO} resizeMode="contain" style={styles.icon} />
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: responsivePortion(8),
    paddingLeft: responsivePortion(20),
    height: responsivePortion(32),
    backgroundColor: Colors.blue,
  },
  icon: {
    width: responsivePortion(14),
    height: responsivePortion(14),
    tintColor: Colors.white,
  },
  text: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(12),
    color: Colors.white,
  },
  slider: {
    width: responsivePortion(109),
  },
});

export default AudioPlayer;
