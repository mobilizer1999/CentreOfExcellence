import React from 'react';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Image, View} from 'react-native';

import Welcome from '@screens/welcome';
import SignUp from '@screens/signup';

const StackNavigatorOptions = {
  initialRouteName: 'Welcome',
  headerMode: 'none',
  defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
  },
};

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  StackNavigatorOptions,
);

const App = createAppContainer(AppNavigator);
export default App;
