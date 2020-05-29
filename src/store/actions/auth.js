import {ToastActionsCreators} from 'react-native-redux-toast';
import * as ActionTypes from '../actiontypes';

export const registerToken = (token) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.REGISTER_AUTH_TOKEN,
      payload: token,
    });
  };
};

export const showErrorToast = (error) => {
  return (dispatch) => {
    dispatch(ToastActionsCreators.displayError(error));
  };
};

export const showInfoToast = (info) => {
  return (dispatch) => {
    dispatch(ToastActionsCreators.displayInfo(info));
  };
};
