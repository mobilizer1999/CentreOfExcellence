import {StyleSheet} from 'react-native';
import Colors from '@config/colors';
import {STATUSBAR_HEIGHT} from '@config/statusbar';
import {DEVICE_SIZE, responsivePortion, FONTS} from '@config/constants';

export const styles = StyleSheet.create({
  titleView: {
    height: DEVICE_SIZE.HEIGHT / 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(28),
    fontWeight: 'bold',
    letterSpacing: 1,
    color: Colors.white,
    textAlign: 'center',
  },
  description: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(14),
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
    height: DEVICE_SIZE.WIDTH / 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    width: (DEVICE_SIZE.CONTENT_WIDTH - 20) / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
  },
  longButton: {
    height: DEVICE_SIZE.WIDTH / 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
  },
  buttonText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(15),
    color: Colors.white,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  separateView: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
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
    bottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(14),
    color: Colors.white,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
