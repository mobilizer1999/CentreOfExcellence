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
    flex: 1,
    backgroundColor: Colors.white,
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
  slantedText: {
    fontFamily: FONTS.bornreadyslanted,
    fontSize: responsivePortion(34),
    color: Colors.white,
  },
  font12Normal: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(12),
    fontWeight: 'normal',
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
  tabBarView: {
    height: responsivePortion(56),
    flexDirection: 'row',
  },
  tabBarOuter: {
    flex: 1,
    borderBottomWidth: 4,
    borderColor: Colors.white,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsivePortion(8),
  },
});
