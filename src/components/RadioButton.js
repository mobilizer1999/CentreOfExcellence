import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native-animatable';
import PropTypes from 'prop-types';
import Colors from '@config/colors';

export default class RadioButton extends Component {
  static propTypes = {
    size: PropTypes.number,
    innerColor: PropTypes.string,
    outerColor: PropTypes.string,
    isSelected: PropTypes.bool,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    size: 16,
    innerColor: Colors.background,
    outerColor: Colors.disabled,
    isSelected: false,
    onPress: () => null,
  };

  render() {
    const {size, innerColor, outerColor, isSelected, onPress} = this.props;
    const outerStyle = {
      borderColor: outerColor,
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: 1,
    };

    const innerStyle = {
      width: size - 8,
      height: size - 8,
      borderRadius: (size - 8) / 2,
      backgroundColor: innerColor,
    };

    return (
      <TouchableOpacity style={[styles.radio, outerStyle]} onPress={onPress}>
        {isSelected ? <View style={innerStyle} {...this.props} /> : null}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
