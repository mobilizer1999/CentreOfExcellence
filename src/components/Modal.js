import React from 'react';
import Modal from 'react-native-modal';
import {DEVICE_SIZE} from '@config/constants';

export const ModalView = ({
  visible,
  animationIn,
  animationOut,
  onBackButtonPress,
  onBackdropPress,
  children,
}) => {
  return (
    <Modal
      style={{margin: 0}}
      isVisible={visible}
      animationIn={animationIn ? animationIn : 'slideInUp'}
      animationOut={animationOut ? animationOut : 'slideOutDown'}
      deviceHeight={DEVICE_SIZE.HEIGHT}
      deviceWidth={DEVICE_SIZE.WIDTH}
      animationInTiming={360}
      animationOutTiming={360}
      avoidKeyboard
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}>
      {children}
    </Modal>
  );
};
