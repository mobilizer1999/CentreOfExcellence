import React from 'react';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import TabBarButton from '@components/TabButton';
import Colors from '@config/colors';
import {responsiveVerticalPortion} from '@config/constants';

import Welcome from '@screens/welcome';
import SignUp from '@screens/signup';
import Login from '@screens/login';
import Intro from '@screens/intro';

import Home from '@screens/tabs/home';
import Drawer from '@screens/tabs/drawer';
import Wishlist from '@screens/tabs/wishlist';
import MyCourses from '@screens/tabs/mycourses';
import Messages from '@screens/tabs/messages';
import Accounts from '@screens/tabs/accounts';

const StackNavigatorOptions = {
  initialRouteName: 'Welcome',
  headerMode: 'none',
  defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
  },
};

const BottomTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Wishlist: {
      screen: Wishlist,
    },
    MyCourses: {
      screen: MyCourses,
    },
    Messages: {
      screen: Messages,
    },
    Accounts: {
      screen: Accounts,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarButtonComponent: (props) => (
        <TabBarButton routeName={navigation.state.routeName} {...props} />
      ),
    }),
    tabBarOptions: {
      style: {
        height: responsiveVerticalPortion(45),
      },
      tabStyle: {
        paddingVertical: 5,
      },
    },
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Drawer: {
      screen: BottomTabs,
    },
  },
  {
    initialRouteName: 'Drawer',
    contentComponent: Drawer,
    drawerBackgroundColor: Colors.background,
    drawerType: 'front',
  },
);

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    SignUp: {
      screen: SignUp,
    },
    Login: {
      screen: Login,
    },
    Intro: {
      screen: Intro,
    },
    Home: {
      screen: DrawerNavigator,
    },
  },
  StackNavigatorOptions,
);

const App = createAppContainer(AppNavigator);
export default App;
