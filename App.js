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
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Toast} from 'react-native-redux-toast';
import Main from './src';
import {store, persistor} from './src/store';

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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <StatusBar
              translucent
              barStyle="light-content"
              backgroundColor="transparent"
              hidden={false}
            />
            <Main />
          </View>
        </PersistGate>
        <Toast messageStyle={styles.toast} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toast: {
    color: '#fff',
  },
});

export default App;
