import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '@config/colors';
import {
  responsivePortion,
  responsiveVerticalPortion,
  DEVICE_SIZE,
  FONTS,
} from '@config/constants';
import ICONS from '@config/icons';

const logoImg = require('@assets/logo/logo.png');

export default class HeaderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  render() {
    const {style, showBack, onPressMenu} = this.props;
    return (
      <View style={[styles.container, {style}]}>
        <View style={styles.menuView}>
          <TouchableOpacity onPress={onPressMenu}>
            <Image
              source={showBack ? ICONS.BACK : ICONS.MENU}
              resizeMode="contain"
              style={styles.icon}
            />
          </TouchableOpacity>
          {!showBack && <Text style={styles.label}>Explorer</Text>}
        </View>
        <Image source={logoImg} resizeMode="contain" style={styles.logo} />
        <View style={styles.menuView}>
          <TouchableOpacity style={styles.ringIcon}>
            <View style={styles.noti} />
            <Image
              source={ICONS.RING}
              resizeMode="contain"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={ICONS.SEARCH}
              resizeMode="contain"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

HeaderView.defaultProps = {
  style: null,
  showBack: false,
  onPressMenu: null,
};

HeaderView.propTypes = {
  style: PropTypes.instanceOf(Object),
  showBack: PropTypes.bool,
  onPressMenu: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: responsiveVerticalPortion(48),
    flexDirection: 'row',
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: (DEVICE_SIZE.WIDTH - DEVICE_SIZE.CONTENT_WIDTH) / 2,
  },
  menuView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    left: (DEVICE_SIZE.WIDTH - responsivePortion(60)) / 2,
    width: responsivePortion(60),
    height: responsivePortion(40),
  },
  icon: {
    width: responsivePortion(16),
    height: responsivePortion(16),
    tintColor: Colors.white,
    padding: 5,
  },
  ringIcon: {
    marginRight: responsivePortion(20),
  },
  noti: {
    position: 'absolute',
    top: responsivePortion(-4),
    right: responsivePortion(-2),
    width: responsivePortion(8),
    height: responsivePortion(8),
    borderRadius: responsivePortion(4),
    backgroundColor: Colors.red,
    zIndex: 1,
  },
  label: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(10),
    fontWeight: '600',
    color: Colors.white,
    marginLeft: responsivePortion(8),
  },
});
