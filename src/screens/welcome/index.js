import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {LogoView} from '@components/Logo';
import {styles} from './styles';
import Colors from '@config/colors';

const backgroundImg = require('@assets/welcome/background.png');

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressSignUp = () => {
    const {navigation} = this.props;
    navigation.navigate('SignUp');
  };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={backgroundImg}
        resizeMode="cover">
        <LogoView />
        <View style={styles.contentView}>
          <View style={styles.content}>
            <View>
              <Text style={styles.description}>
                YOUR EXPERIENCE BEGINS HERE
              </Text>
              <Text style={[styles.welcome, {marginTop: 10}]}>
                Welcome to the
              </Text>
              <Text style={styles.welcome}>Center of Excellence</Text>
            </View>
            <View style={styles.buttonView}>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.button, {backgroundColor: Colors.white}]}
                  onPress={this.onPressSignIn}>
                  <Text style={[styles.buttonText, {color: Colors.background}]}>
                    Sign in
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onPressSignUp}>
                  <Text style={[styles.buttonText, {color: Colors.white}]}>
                    Create an account
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.skipView}>
                <Text style={styles.skip}>Skip for now and browse courses</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Welcome;
