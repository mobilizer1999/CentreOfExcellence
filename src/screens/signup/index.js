import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {BaseView} from '@components/Base';
import {LogoView} from '@components/Logo';
import Colors from '@config/colors';
import {styles} from './styles';

const fbIcon = require('@assets/icons/facebook.png');
const googleIcon = require('@assets/icons/google.png');

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  render() {
    const {step} = this.state;
    return (
      <BaseView>
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
          {step === 0 && (
            <TouchableOpacity style={styles.longButton}>
              <Text style={[styles.buttonText, {color: Colors.background}]}>
                Use your email address
              </Text>
            </TouchableOpacity>
          )}
          <View style={[styles.separateView, {justifyContent: 'center'}]}>
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
              ]}>
              Login
            </Text>
          </View>
        </View>
        <View style={styles.skipView}>
          <Text style={styles.skip}>Skip for now and browse courses</Text>
        </View>
      </BaseView>
    );
  }
}

export default SignUp;
