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
    flex: 1,
    backgroundColor: Colors.mainbackground,
  },
  scrollView: {
    flex: 1,
  },
  carouselView: {
    flex: 1,
    width: '100%',
    marginTop: responsiveVerticalPortion(18),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseImageView: {
    width: '100%',
    height: responsiveVerticalPortion(136),
  },
  backIcon: {
    width: responsivePortion(16),
    height: responsivePortion(13.6),
    tintColor: Colors.white,
  },
  backIconView: {
    position: 'absolute',
    left: DEVICE_SIZE.CONTENT_PADDING,
    top: responsiveVerticalPortion(16),
    zIndex: 10,
  },
  gearIconView: {
    position: 'absolute',
    right: DEVICE_SIZE.CONTENT_PADDING,
    top: responsiveVerticalPortion(16),
    zIndex: 10,
  },
  subjectImage: {
    width: '100%',
    height: '100%',
  },
  courseMark: {
    minWidth: responsivePortion(61),
    height: responsiveVerticalPortion(24),
    paddingHorizontal: responsivePortion(8),
    backgroundColor: Colors.blue,
    borderRadius: responsiveVerticalPortion(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveVerticalPortion(16),
  },
  normalText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(10),
    fontWeight: 'normal',
    letterSpacing: responsivePortion(0.33),
    color: Colors.white,
  },
  mediumText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(14),
    fontWeight: 'bold',
    color: Colors.black,
  },
  largeText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(20),
    fontWeight: 'bold',
    color: Colors.white,
  },
  smallText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(8),
    fontWeight: 'normal',
    color: Colors.white,
  },
  signout: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(12),
    fontWeight: 'bold',
    color: Colors.white,
    textDecorationLine: 'underline',
  },
  slantedText: {
    fontFamily: FONTS.bornreadyslanted,
    fontSize: responsivePortion(34),
    color: Colors.white,
  },
  fullButton: {
    width: DEVICE_SIZE.CONTENT_WIDTH,
    height: responsiveVerticalPortion(32),
    backgroundColor: Colors.blue,
    borderRadius: responsivePortion(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortDropDown: {
    width: DEVICE_SIZE.CONTENT_WIDTH,
    height: responsiveVerticalPortion(32),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.disabled,
    borderRadius: responsivePortion(2),
    paddingRight: responsivePortion(8),
    marginTop: responsivePortion(12),
  },
  messageItem: {
    height: Platform.isPad ? responsivePortion(199) : responsiveVerticalPortion(199),
    borderRadius: responsivePortion(5),
    borderWidth: 1,
    borderColor: Colors.disabled,
    marginHorizontal: DEVICE_SIZE.CONTENT_PADDING,
    marginTop: responsiveVerticalPortion(18),
    padding: responsivePortion(16),
  },
});
