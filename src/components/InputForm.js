import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
import Colors from '@config/colors';
import {
  responsivePortion,
  responsiveVerticalPortion,
  FONTS,
} from '@config/constants';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  render() {
    const {
      style,
      label,
      placeholder,
      keyboardType,
      returnKeyType,
      autoCapitalize,
      secureTextEntry,
      name,
      value,
      onChange,
      icon,
      iconTintColor,
      onPressIcon,
    } = this.props;
    const {focused} = this.state;
    return (
      <View style={[styles.container, style]}>
        <Text style={styles.label}>{label}</Text>
        <View
          style={[
            styles.inputView,
            {borderColor: focused ? Colors.background : Colors.gray},
          ]}>
          <TextInput
            style={[
              styles.input,
              {
                letterSpacing:
                  (name === 'password' || name === 'passwd') &&
                  value !== '' &&
                  secureTextEntry
                    ? responsivePortion(5)
                    : responsivePortion(0.33),
              },
            ]}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={Colors.gray}
            underlineColorAndroid="transparent"
            autoCorrect
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
            onChangeText={(text) => {
              onChange(name, text);
            }}
            onFocus={() => {
              this.setState({focused: true});
            }}
            onBlur={() => {
              this.setState({focused: false});
            }}
          />
          {icon && (
            <TouchableOpacity disabled={!onPressIcon} onPress={onPressIcon}>
              <Image
                source={icon}
                resizeMode="contain"
                style={[styles.icon, {tintColor: iconTintColor}]}
              />
            </TouchableOpacity>
          )}
        </View>
        {name === 'password' && value !== '' && focused && (
          <View style={[styles.inputView, {borderTopWidth: 0}]}>
            <Text style={styles.subText}>Weak</Text>
            <View style={styles.progress}>
              <Progress.Bar
                progress={0.4}
                width={null}
                height={responsiveVerticalPortion(8)}
                color={Colors.red}
                unfilledColor="#EFF3F6"
                borderWidth={0}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

InputForm.defaultProps = {
  style: null,
  secureTextEntry: false,
  icon: null,
  iconTintColor: Colors.disabled,
  onPressIcon: null,
};

InputForm.propTypes = {
  style: PropTypes.instanceOf(Object),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.string.isRequired,
  returnKeyType: PropTypes.string.isRequired,
  autoCapitalize: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.number,
  iconTintColor: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onPressIcon: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(14),
    fontWeight: 'bold',
    color: Colors.black,
    letterSpacing: responsivePortion(0.33),
    marginBottom: responsiveVerticalPortion(5),
  },
  inputView: {
    height: responsiveVerticalPortion(32),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsivePortion(16),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.background,
  },
  input: {
    flex: 1,
    height: '100%',
    fontFamily: FONTS.main,
    fontSize: responsivePortion(14),
    fontWeight: 'normal',
    color: Colors.black,
    letterSpacing: responsivePortion(0.33),
    borderColor: Colors.gray,
  },
  subText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(14),
    color: Colors.black,
    letterSpacing: responsivePortion(0.33),
  },
  progress: {
    flex: 1,
    marginLeft: responsivePortion(7),
  },
  icon: {
    width: responsivePortion(16),
    height: responsiveVerticalPortion(15),
    margin: 3,
  },
});
