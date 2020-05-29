import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {DEVICE_SIZE} from '@config/constants';
import Colors from '@config/colors';
import {responsivePortion} from '@config/constants';

export const LoadingView = ({visible}) => {
  return (
    <Modal
      style={{margin: 0}}
      isVisible={visible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      deviceHeight={DEVICE_SIZE.HEIGHT}
      deviceWidth={DEVICE_SIZE.WIDTH}
      animationInTiming={200}
      animationOutTiming={200}
      avoidKeyboard>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.blue} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DEVICE_SIZE.WIDTH / 5,
    height: DEVICE_SIZE.WIDTH / 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    marginLeft: (DEVICE_SIZE.WIDTH * 2) / 5,
    borderRadius: responsivePortion(5),
  },
});
