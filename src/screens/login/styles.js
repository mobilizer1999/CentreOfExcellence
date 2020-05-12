import {StyleSheet} from 'react-native';
import Colors from '@config/colors';
import {STATUSBAR_HEIGHT} from '@config/statusbar';
import {
  DEVICE_SIZE,
  responsivePortion,
  responsiveVerticalPortion,
  FONTS,
} from '@config/constants';

export const styles = StyleSheet.create({
  titleView: {
    height: DEVICE_SIZE.HEIGHT / 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(24),
    fontWeight: 'bold',
    letterSpacing: 1,
    color: Colors.white,
    textAlign: 'center',
  },
  description: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(10),
    color: Colors.white,
    letterSpacing: 0.5,
    textAlign: 'center',
    marginTop: 5,
  },
  contentView: {
    flex: 1,
    paddingHorizontal: (DEVICE_SIZE.WIDTH - DEVICE_SIZE.CONTENT_WIDTH) / 2,
  },
  buttons: {
    width: '100%',
    height: responsiveVerticalPortion(32),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveVerticalPortion(16),
  },
  button: {
    width: (DEVICE_SIZE.CONTENT_WIDTH - 20) / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsivePortion(2),
    borderColor: Colors.white,
    backgroundColor: Colors.white,
  },
  longButton: {
    height: DEVICE_SIZE.WIDTH / 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsivePortion(2),
    borderColor: Colors.white,
    backgroundColor: Colors.white,
  },
  nextButton: {
    height: responsiveVerticalPortion(32),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsivePortion(2),
    backgroundColor: Colors.gray,
    marginTop: responsiveVerticalPortion(24),
  },
  buttonText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(12),
    color: Colors.white,
  },
  icon: {
    width: responsivePortion(16),
    height: responsivePortion(16),
    marginRight: 10,
  },
  separateView: {
    flexDirection: 'row',
    paddingVertical: responsiveVerticalPortion(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionView: {
    flexDirection: 'row',
    marginTop: responsiveVerticalPortion(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    borderWidth: 1,
  },
  skipView: {
    position: 'absolute',
    width: '100%',
    bottom: responsiveVerticalPortion(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(10),
    color: Colors.white,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  radioView: {
    flexDirection: 'row',
    marginTop: responsiveVerticalPortion(16),
  },
  radioBoldLabel: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(10),
    fontWeight: 'bold',
    color: Colors.black,
    letterSpacing: responsivePortion(0.33),
    marginLeft: responsivePortion(8),
  },
});
