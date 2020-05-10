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

const logoImg = require('@assets/logo/logo.png');
const menuIcon = require('@assets/icons/menu.png');
const searchIcon = require('@assets/icons/search.png');

export default class HeaderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  render() {
    const {style, onPressMenu} = this.props;
    return (
      <View style={[styles.container, {style}]}>
        <View style={styles.menuView}>
          <TouchableOpacity onPress={onPressMenu}>
            <Image source={menuIcon} resizeMode="contain" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.label}>Explorer</Text>
        </View>
        <Image source={logoImg} resizeMode="contain" style={styles.logo} />
        <View style={styles.menuView}>
          <TouchableOpacity>
            <Image
              source={searchIcon}
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
  onPressMenu: null,
};

HeaderView.propTypes = {
  style: PropTypes.instanceOf(Object),
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
    height: responsivePortion(48),
  },
  icon: {
    width: responsivePortion(22),
    height: responsivePortion(22),
    tintColor: Colors.white,
    padding: 5,
  },
  label: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(14),
    fontWeight: '600',
    color: Colors.white,
    marginLeft: responsivePortion(8),
  },
});
