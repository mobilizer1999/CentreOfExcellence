import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  UIManager,
  Keyboard,
  TextInput,
  Animated,
} from 'react-native';
import {BaseView} from '@components/Base';
import {LogoView} from '@components/Logo';
import InputForm from '@components/InputForm';
import Colors from '@config/colors';
import {responsiveVerticalPortion, DEVICE_SIZE} from '@config/constants';
import {styles} from './styles';

const {State: TextInputState} = TextInput;
const fbIcon = require('@assets/icons/facebook.png');
const googleIcon = require('@assets/icons/google.png');
const eyeIcon = require('@assets/icons/eye.png');

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 2,
      inputValues: {
        firstName: '',
        lastName: '',
      },
      shift: new Animated.Value(0),
      showPass: false,
    };
  }

  UNSAFE_componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener(
      'keyboardDidShow',
      this.handleKeyboardDidShow,
    );
    this.keyboardDidHideSub = Keyboard.addListener(
      'keyboardDidHide',
      this.handleKeyboardDidHide,
    );
  }

  handleKeyboardDidShow = (event) => {
    const windowHeight = DEVICE_SIZE.HEIGHT;
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(
      currentlyFocusedField,
      (originX, originY, width, height, pageX, pageY) => {
        const fieldHeight = height;
        const fieldTop = pageY;
        const gap = windowHeight - keyboardHeight - (fieldTop + fieldHeight);
        if (gap >= 0) {
          return;
        }
        Animated.timing(this.state.shift, {
          toValue: gap,
          duration: 500,
          useNativeDriver: true,
        }).start();
      },
    );
  };

  handleKeyboardDidHide = () => {
    Animated.timing(this.state.shift, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  onPressPlusStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1,
    });
  };

  onChange = (name, value) => {
    const {inputValues} = this.state;
    this.setState({
      inputValues: {
        ...inputValues,
        [name]: value,
      },
    });
  };

  onShowHidePass = () => {
    const {showPass} = this.state;
    this.setState({showPass: !showPass});
  };

  renderStepOne = () => {
    const {inputValues} = this.state;
    const filledOut =
      inputValues.firstName !== '' && inputValues.lastName !== '';
    return (
      <View>
        <InputForm
          label="First Name"
          placeholder="First Name"
          keyboardType="default"
          returnKeyType="next"
          autoCapitalize="words"
          name="firstName"
          value={inputValues.firstName}
          onChange={this.onChange}
        />
        <InputForm
          style={{marginTop: responsiveVerticalPortion(8)}}
          label="Last Name"
          placeholder="Last Name"
          keyboardType="default"
          returnKeyType="done"
          autoCapitalize="words"
          name="lastName"
          value={inputValues.lastName}
          onChange={this.onChange}
        />
        <TouchableOpacity
          style={[
            styles.nextButton,
            {backgroundColor: filledOut ? Colors.background : Colors.disabled},
          ]}
          disabled={!filledOut}
          onPress={this.onPressPlusStep}>
          <Text style={[styles.buttonText, {color: Colors.white}]}>
            Next Step
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderStepTwo = () => {
    const {inputValues, showPass} = this.state;
    const filledOut = inputValues.email !== '' && inputValues.password !== '';
    return (
      <View>
        <InputForm
          label="Email Address"
          placeholder="Email Address"
          keyboardType="default"
          returnKeyType="next"
          autoCapitalize="none"
          name="email"
          value={inputValues.email}
          onChange={this.onChange}
        />
        <InputForm
          style={{marginTop: responsiveVerticalPortion(8)}}
          label="Password"
          placeholder="Password"
          keyboardType="default"
          returnKeyType="done"
          autoCapitalize="none"
          name="password"
          value={inputValues.password}
          secureTextEntry={!showPass}
          icon={eyeIcon}
          iconTintColor="#00192F"
          onPressIcon={this.onShowHidePass}
          onChange={this.onChange}
        />
        <TouchableOpacity
          style={[
            styles.nextButton,
            {backgroundColor: filledOut ? Colors.background : Colors.disabled},
          ]}
          disabled={!filledOut}
          onPress={this.onPressPlusStep}>
          <Text style={[styles.buttonText, {color: Colors.white}]}>
            Next Step
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {step, shift} = this.state;
    return (
      <BaseView style={{transform: [{translateY: shift}]}}>
        <LogoView />
        <View style={styles.titleView}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.description}>
            Please sign up to your account using
          </Text>
        </View>
        <View
          style={[
            styles.contentView,
            {backgroundColor: step === 0 ? Colors.background : Colors.white},
          ]}>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  borderColor: step === 0 ? Colors.white : Colors.background,
                  borderWidth: 1,
                },
              ]}
              onPress={this.onPressSignIn}>
              <Image source={fbIcon} resizeMode="contain" style={styles.icon} />
              <Text style={[styles.buttonText, {color: Colors.background}]}>
                Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  borderColor: Colors.red,
                  borderWidth: 1,
                  backgroundColor: Colors.red,
                },
              ]}
              onPress={this.onPressSignUp}>
              <Image
                source={googleIcon}
                resizeMode="contain"
                style={styles.icon}
              />
              <Text style={[styles.buttonText, {color: Colors.white}]}>
                Google
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separateView}>
            <View style={[styles.line, {borderColor: Colors.gray}]} />
            <Text
              style={[
                styles.description,
                {
                  marginHorizontal: 15,
                  marginTop: -5,
                  color: step === 0 ? Colors.white : Colors.black,
                },
              ]}>
              or
            </Text>
            <View style={[styles.line, {borderColor: Colors.gray}]} />
          </View>
          {step === 1 && this.renderStepOne()}
          {step === 2 && this.renderStepTwo()}
          {step === 0 && (
            <TouchableOpacity
              style={styles.longButton}
              onPress={this.onPressPlusStep}>
              <Text style={[styles.buttonText, {color: Colors.background}]}>
                Use your email address
              </Text>
            </TouchableOpacity>
          )}
          <View style={styles.descriptionView}>
            <Text
              style={[
                styles.description,
                {color: step === 0 ? Colors.white : Colors.black},
              ]}>
              Already have an account?
            </Text>
            <Text
              style={[
                styles.buttonText,
                {
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                  marginLeft: 5,
                  marginTop: 3,
                  color: step === 0 ? Colors.white : Colors.background,
                },
              ]}
              onPress={this.onPressGoLogin}>
              Login
            </Text>
          </View>
        </View>
        <View style={styles.skipView}>
          <Text
            style={[
              styles.skip,
              {color: step === 0 ? Colors.white : Colors.background},
            ]}>
            Skip for now and browse courses
          </Text>
        </View>
      </BaseView>
    );
  }
}

export default SignUp;
