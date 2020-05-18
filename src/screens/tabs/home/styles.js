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
    backgroundColor: Colors.mainbackground,
  },
  subjectView: {
    width: '100%',
    height: responsiveVerticalPortion(144),
    marginBottom: responsiveVerticalPortion(26),
  },
  subjectImage: {
    width: '100%',
    height: '100%',
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
  pagination: {
    position: 'absolute',
    width: '100%',
    height: responsiveVerticalPortion(40),
    bottom: 0,
  },
  normalText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(10),
    fontWeight: 'normal',
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
  subjectTextView: {
    position: 'absolute',
    right: 0,
    bottom: responsiveVerticalPortion(44),
    paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING,
    zIndex: 1,
  },
  scrollView: {
    flex: 1,
  },
  carouselView: {
    flex: 1,
    width: '100%',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(12),
    fontWeight: 'bold',
    color: Colors.black,
  },
  icon: {
    width: responsivePortion(12),
    height: responsivePortion(12),
    tintColor: Colors.black,
  },
  smallIcon: {
    width: responsivePortion(8),
    height: responsivePortion(8),
    tintColor: Colors.white,
  },

  // CourseA Styles
  courseImageView: {
    width: '100%',
    height: responsiveVerticalPortion(216),
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
  courseMark: {
    minWidth: responsivePortion(61),
    height: responsiveVerticalPortion(24),
    paddingHorizontal: responsivePortion(8),
    backgroundColor: Colors.blue,
    borderRadius: responsiveVerticalPortion(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveVerticalPortion(14),
  },
  slantedText: {
    fontFamily: FONTS.bornreadyslanted,
    fontSize: responsivePortion(34),
    color: Colors.white,
    marginTop: responsiveVerticalPortion(22),
  },
  certifiedIcon: {
    width: responsivePortion(14),
    height: responsivePortion(16),
    tintColor: Colors.white,
  },
  accreditedIcon: {
    width: responsivePortion(16),
    height: responsivePortion(16),
    tintColor: Colors.white,
  },
  searchView: {
    paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING,
    marginTop: responsiveVerticalPortion(24),
  },
  tabViewHeader: {
    flexDirection: 'row',
    padding: responsivePortion(4),
    borderWidth: 1,
    borderColor: Colors.blue,
  },
  tabViewIcon: {
    width: responsivePortion(16),
    height: responsivePortion(19),
    tintColor: Colors.white,
    marginRight: responsivePortion(8),
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

  // Course Details
  imageView: {
    width: '100%',
    height: responsiveVerticalPortion(136),
  },
  courseContentView: {
    paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING,
  },
  courseType: {
    width: null,
    height: responsivePortion(24),
    borderRadius: responsivePortion(12),
    marginTop: responsivePortion(-12),
    backgroundColor: Colors.blue,
    paddingHorizontal: responsivePortion(12),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  courseNormalText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(12),
    fontWeight: 'normal',
    color: Colors.black,
  },
  tagView: {
    paddingHorizontal: responsivePortion(8),
    paddingVertical: responsivePortion(4),
    backgroundColor: Colors.green100,
    borderRadius: responsivePortion(4),
    marginLeft: responsivePortion(4),
  },
  timerIcon: {
    width: responsivePortion(20),
    height: responsivePortion(20),
    tintColor: Colors.orange,
  },
  timerView: {
    height: responsivePortion(60),
    justifyContent: 'space-between',
    marginLeft: responsivePortion(16),
  },
  stickyHeader: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: DEVICE_SIZE.WIDTH,
    height: responsivePortion(104),
    backgroundColor: Colors.white,
    elevation: 10,
  },
  courseBuyButton: {
    flex: 1,
    height: responsivePortion(32),
    backgroundColor: Colors.green,
    borderRadius: responsivePortion(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  financeText: {
    width: responsivePortion(49),
    height: responsivePortion(18),
  },
  giftButton: {
    height: responsivePortion(32),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: responsivePortion(3),
    borderColor: '#979797',
  },
  icon16: {
    width: responsivePortion(16),
    height: responsivePortion(16),
    tintColor: Colors.blue,
  },
  topSticky: {
    height: responsivePortion(54),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: '#D7D7D7',
  },
  seeAlsoView: {
    height: responsiveVerticalPortion(56),
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsivePortion(2),
    marginBottom: responsiveVerticalPortion(24),
  },
  accreditationView: {
    height: responsiveVerticalPortion(114),
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.disabled,
  },
  accreditationImg: {
    width: responsivePortion(51),
    height: responsivePortion(29),
  },
  reviewAvatar: {
    width: responsivePortion(32),
    height: responsivePortion(32),
  },
  whiteParent: {
    backgroundColor: Colors.white,
    paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING,
  },
  modalContent: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: DEVICE_SIZE.HEIGHT - responsiveVerticalPortion(396),
  },
  googlePayView: {
    height: responsiveVerticalPortion(52),
    backgroundColor: Colors.white,
    paddingHorizontal: responsivePortion(16),
    justifyContent: 'center',
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
  },
  gpayIcon: {
    width: responsivePortion(51),
    height: responsiveVerticalPortion(21),
  },

  // AudioDetails
  audioMaskView: {
    position: 'absolute',
    width: responsivePortion(152),
    height: '100%',
    top: 0,
    right: 0,
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    opacity: 0.75,
  },
  earphoneIcon: {
    position: 'absolute',
    width: responsiveVerticalPortion(20),
    height: responsiveVerticalPortion(20),
    tintColor: Colors.white,
    top: responsiveVerticalPortion(58),
    right: responsivePortion(108),
  },
  audioHeaderView: {
    position: 'absolute',
    width: responsivePortion(50),
    height: responsiveVerticalPortion(30),
    top: responsiveVerticalPortion(55),
    right: responsivePortion(46),
  },
});
