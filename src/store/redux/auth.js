import * as ActionTypes from '../actiontypes';

const initialState = {
  authToken: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
