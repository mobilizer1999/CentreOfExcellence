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
import {NavigationActions, StackActions} from 'react-navigation';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {BaseView} from '@components/Base';
import {LogoView} from '@components/Logo';
import InputForm from '@components/InputForm';
import {LoadingView} from '@components/Loading';
import Colors from '@config/colors';
import {
  responsiveVerticalPortion,
  responsivePortion,
  DEVICE_SIZE,
} from '@config/constants';
import {styles} from './styles';
import ICONS from '@config/icons';
import AjaxHelper from '@config/network';
import {emailValidation} from '@config/global';
import {showErrorToast, registerToken} from '@store/actions/auth';

const {State: TextInputState} = TextInput;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      inputValues: {
        email: 'edwin@soapmedia.co.uk',
        passwd: 'asda123',
      },
      shift: new Animated.Value(0),
      showPass: false,
      loading: false,
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

  componentWillUnmount() {
    this.keyboardDidHideSub.remove();
    this.keyboardDidShowSub.remove();
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

  onPressPlusStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1,
    });
  };

  onPressGoSignup = () => {
    const {navigation} = this.props;
    navigation.navigate('SignUp');
  };

  onSuccess = (response) => {
    this.setState({loading: false}, () => {
      const {navigation, registerToken, showErrorToast} = this.props;
      if (response.token) {
        registerToken(response.token);
        const routeName = 'Home';
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName})],
        });
        navigation.dispatch(resetAction);
      } else if (response.code) {
        showErrorToast(response.message);
      }
    });
  };

  onError = (error) => {
    console.log(error);
    const {showErrorToast} = this.props;
    this.setState({loading: false}, () => {
      showErrorToast('Something went wrong.');
    });
  };

  onPressLogin = () => {
    const {inputValues} = this.state;
    const body = {
      email: inputValues.email,
      password: inputValues.passwd,
    };
    this.setState(
      {
        loading: true,
      },
      () => {
        AjaxHelper.postData(
          'shop-api/login',
          body,
          this.onSuccess,
          this.onError,
        );
      },
    );
  };

  renderEmailPassword = () => {
    const {inputValues, showPass} = this.state;
    const filledOut =
      emailValidation(inputValues.email) && inputValues.passwd !== '';
    return (
      <View>
        <InputForm
          label="Email Address"
          placeholder="Email Address"
          keyboardType="email-address"
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
          name="passwd"
          value={inputValues.passwd}
          secureTextEntry={!showPass}
          icon={showPass ? ICONS.EYE : ICONS.EYE_HIDE}
          iconTintColor={showPass ? Colors.blue : Colors.black}
          onPressIcon={this.onShowHidePass}
          onChange={this.onChange}
        />
        <TouchableOpacity
          style={[
            styles.nextButton,
            {backgroundColor: filledOut ? Colors.background : Colors.disabled},
          ]}
          disabled={!filledOut}
          onPress={this.onPressLogin}>
          <Text style={[styles.buttonText, {color: Colors.white}]}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {step, shift, loading} = this.state;
    return (
      <BaseView style={{transform: [{translateY: shift}]}}>
        <LoadingView visible={loading} />
        <LogoView />
        <View style={styles.titleView}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.description}>
            Please login to your account using
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
              <Image
                source={ICONS.FBICON}
                resizeMode="contain"
                style={[
                  styles.icon,
                  {width: responsivePortion(20), height: responsivePortion(20)},
                ]}
              />
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
              onPress={this.onPressLogin}>
              <Image
                source={ICONS.GOOGLEICON}
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
          {step === 1 && this.renderEmailPassword()}
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
              Don`t have an account?
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
              onPress={this.onPressGoSignup}>
              Sign up
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

Login.propTypes = {
  auth: PropTypes.instanceOf(Object).isRequired,
  registerToken: PropTypes.func.isRequired,
  showErrorToast: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {showErrorToast, registerToken})(Login);
