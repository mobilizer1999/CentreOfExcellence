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
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: STATUSBAR_HEIGHT,
  },
  contentView: {
    flex: 1,
    width: DEVICE_SIZE.CONTENT_WIDTH,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 0.5,
    justifyContent: 'space-between',
  },
  description: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(14),
    color: Colors.white,
    letterSpacing: 1,
    textAlign: 'center',
  },
  welcome: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(28),
    fontWeight: 'bold',
    letterSpacing: 1,
    color: Colors.white,
    textAlign: 'center',
  },
  buttonView: {
    width: '100%',
    height: DEVICE_SIZE.HEIGHT / 6.5,
  },
  buttons: {
    width: '100%',
    height: responsiveVerticalPortion(32),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: (DEVICE_SIZE.CONTENT_WIDTH - 20) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsivePortion(2),
    borderColor: Colors.white,
    borderWidth: 1,
  },
  buttonText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(15),
  },
  skipView: {
    position: 'absolute',
    bottom: responsiveVerticalPortion(18),
    width: '100%',
    justifyContent: 'center',
  },
  skip: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(14),
    color: Colors.white,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
