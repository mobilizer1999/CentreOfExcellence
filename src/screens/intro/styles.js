import {StyleSheet, Platform} from 'react-native';
import Colors from '@config/colors';
import {
  DEVICE_SIZE,
  responsivePortion,
  responsiveVerticalPortion,
  FONTS,
} from '@config/constants';

export const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: (DEVICE_SIZE.WIDTH - DEVICE_SIZE.CONTENT_WIDTH) / 2,
  },
  introView: {
    marginTop: responsiveVerticalPortion(130),
    flexDirection: 'row',
    alignItems: 'center',
  },
  prevButton: {
    position: 'absolute',
    left: DEVICE_SIZE.CONTENT_PADDING,
    top: Platform.isPad
      ? responsiveVerticalPortion(120)
      : responsiveVerticalPortion(115),
    width: responsivePortion(20),
    zIndex: 3,
  },
  nextButton: {
    position: 'absolute',
    right: DEVICE_SIZE.CONTENT_PADDING,
    top: Platform.isPad
      ? responsiveVerticalPortion(120)
      : responsiveVerticalPortion(115),
    width: responsivePortion(20),
  },
  logo: {
    width: DEVICE_SIZE.WIDTH / 3.5,
    height: DEVICE_SIZE.HEIGHT / 7,
  },
  icon: {
    width: responsivePortion(14),
    height: responsiveVerticalPortion(22),
    tintColor: Colors.white,
    padding: 5,
  },
  sliderView: {
    width: DEVICE_SIZE.CONTENT_WIDTH,
    height: Platform.isPad
      ? responsiveVerticalPortion(210)
      : responsiveVerticalPortion(190),
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  title: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(24),
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  italic: {
    fontFamily: FONTS.bornreadyslanted,
    fontSize: responsivePortion(34),
    color: Colors.white,
    textAlign: 'center',
  },
  description: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(10),
    color: Colors.white,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  activeDot: {
    width: responsiveVerticalPortion(8),
    height: responsiveVerticalPortion(8),
    borderRadius: responsiveVerticalPortion(4),
    backgroundColor: Colors.white,
    marginHorizontal: responsivePortion(8),
  },
  inactiveDot: {
    width: responsiveVerticalPortion(8),
    height: responsiveVerticalPortion(8),
    borderRadius: responsiveVerticalPortion(4),
    marginHorizontal: responsivePortion(8),
    borderColor: Colors.white,
    borderWidth: 1,
  },
  longButton: {
    position: 'absolute',
    bottom: responsiveVerticalPortion(25),
    left: (DEVICE_SIZE.WIDTH - DEVICE_SIZE.CONTENT_WIDTH) / 2,
    width: DEVICE_SIZE.CONTENT_WIDTH,
    height: DEVICE_SIZE.WIDTH / 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsivePortion(2),
    borderColor: Colors.white,
  },
  buttonText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(12),
    color: Colors.white,
  },
});
