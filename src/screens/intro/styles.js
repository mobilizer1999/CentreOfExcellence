import {StyleSheet} from 'react-native';
import Colors from '@config/colors';
import {
  DEVICE_SIZE,
  responsivePortion,
  responsiveVerticalPortion,
  FONTS,
} from '@config/constants';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: (DEVICE_SIZE.WIDTH - DEVICE_SIZE.CONTENT_WIDTH) / 2,
  },
  introView: {
    marginTop: responsiveVerticalPortion(130),
    flexDirection: 'row',
    alignItems: 'center',
  },
  prevButton: {
    width: responsivePortion(20),
  },
  nextButton: {
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
    height: responsiveVerticalPortion(170),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(24),
    fontWeight: 'bold',
    letterSpacing: 1,
    color: Colors.white,
    textAlign: 'center',
  },
  italic: {
    fontStyle: 'italic',
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
    width: '100%',
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
