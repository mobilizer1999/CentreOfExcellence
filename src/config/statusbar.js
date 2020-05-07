import {getStatusBarHeight} from 'react-native-status-bar-height';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import {Platform} from 'react-native';

export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios'
    ? getStatusBarHeight(true)
    : ExtraDimensions.getStatusBarHeight();
