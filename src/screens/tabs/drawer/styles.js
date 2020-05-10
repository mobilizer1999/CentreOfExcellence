import {StyleSheet} from 'react-native';
import Colors from '@config/colors';
import {
  responsivePortion,
  responsiveVerticalPortion,
  FONTS,
} from '@config/constants';
import {STATUSBAR_HEIGHT} from '@config/statusbar';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusbar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: Colors.blue,
  },
  navigationView: {
    width: '100%',
    height: responsiveVerticalPortion(48),
    flexDirection: 'row',
    paddingHorizontal: responsivePortion(24),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.blue,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(14),
    color: Colors.white,
    marginLeft: responsivePortion(5),
  },
  icon: {
    width: responsivePortion(24),
    height: responsivePortion(24),
    tintColor: Colors.white,
  },
  logo: {
    width: responsivePortion(60),
    height: responsivePortion(48),
  },
  scrollView: {
    flex: 1,
  },
  topView: {
    paddingLeft: responsivePortion(16),
    paddingRight: responsivePortion(8),
    backgroundColor: Colors.blue,
  },
  categoryView: {
    paddingHorizontal: responsivePortion(8),
    paddingVertical: responsiveVerticalPortion(10),
    borderBottomWidth: 1,
    borderColor: Colors.white,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveVerticalPortion(8),
  },
  boldText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(20),
    fontWeight: 'bold',
    color: Colors.white,
    marginRight: responsivePortion(5),
  },
  subItemView: {
    height: responsiveVerticalPortion(32),
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyDropDown: {
    width: responsivePortion(120),
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: responsivePortion(2),
    paddingRight: responsivePortion(8),
  },
  avatarView: {
    paddingVertical: responsivePortion(18),
    paddingLeft: responsivePortion(24),
    paddingRight: responsivePortion(18),
  },
  avatar: {
    width: responsivePortion(60),
    height: responsivePortion(60),
    borderRadius: responsivePortion(30),
  },
  versionView: {
    marginTop: responsivePortion(18),
    paddingTop: responsivePortion(8),
    borderTopWidth: 2,
    borderColor: Colors.white,
    opacity: 0.6,
  },
});
