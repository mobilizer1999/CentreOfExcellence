/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StatusBar, Platform, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Main from './src';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      SplashScreen.hide();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
          hidden={false}
        />
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
