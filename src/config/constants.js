import {Dimensions} from 'react-native';

const BASE_WIDTH = 392;
const BASE_HEIGHT = 569;

export const FONTS = {
  main: 'OpenSans',
};

export const DEVICE_SIZE = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
  CONTENT_WIDTH: (Dimensions.get('window').width * 8.5) / 10,
};

export const responsivePortion = (size) => {
  return (size * DEVICE_SIZE.WIDTH) / BASE_WIDTH;
};

export const responsiveVerticalPortion = (size) => {
  return (size * DEVICE_SIZE.HEIGHT) / BASE_HEIGHT;
};
