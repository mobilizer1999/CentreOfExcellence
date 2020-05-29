import React from 'react';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import TabBarButton from '@components/TabButton';
import Colors from '@config/colors';
import {responsiveVerticalPortion, DEVICE_SIZE} from '@config/constants';

import Welcome from '@screens/welcome';
import SignUp from '@screens/signup';
import Login from '@screens/login';
import Intro from '@screens/intro';

import Home from '@screens/tabs/home';
import Drawer from '@screens/tabs/drawer';
import CustomWebView from '@screens/tabs/home/webview';
import CourseDetails from '@screens/tabs/home/coursedetails';
import AudioDetails from '@screens/tabs/home/audiodetails';
import AudioCourse from '@screens/tabs/home/audio';
import Course from '@screens/tabs/home/course';

import Wishlist from '@screens/tabs/wishlist';
import MyCourses from '@screens/tabs/mycourses';
import CourseOverview from '@screens/tabs/mycourses/courseoverview';
import Assessment from '@screens/tabs/mycourses/assessment';
import AudioPlay from '@screens/tabs/mycourses/audioplay';
import Messages from '@screens/tabs/messages';
import Accounts from '@screens/tabs/accounts';

const StackNavigatorOptions = {
  initialRouteName: 'Welcome',
  headerMode: 'none',
  defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
  },
};

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
      }),
    },
    AudioCourse: {
      screen: AudioCourse,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
      }),
    },
    Course: {
      screen: Course,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
      }),
    },
    CourseDetails: {
      screen: CourseDetails,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    AudioDetails: {
      screen: AudioDetails,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    CustomWebView: {
      screen: CustomWebView,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const MyCoursesStack = createStackNavigator(
  {
    MyCourses: {
      screen: MyCourses,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
      }),
    },
    CourseOverview: {
      screen: CourseOverview,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
      }),
    },
    Assessment: {
      screen: Assessment,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
      }),
    },
    AudioPlay: {
      screen: AudioPlay,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
      }),
    },
  },
  {
    initialRouteName: 'MyCourses',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const BottomTabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Wishlist: {
      screen: Wishlist,
    },
    MyCourses: {
      screen: MyCoursesStack,
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
      safeAreaInset: {bottom: 'never', top: 'never'},
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
    drawerWidth: (DEVICE_SIZE.WIDTH * 2) / 3,
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
