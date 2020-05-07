/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import Main from './src';

class App extends React.Component {
  constructor(props) {
    super(props);
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
