import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {toastReducer as toast} from 'react-native-redux-toast';

import AuthReducer from './redux/auth';

const persistConfig = {
  key: 'coe-store',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, AuthReducer);
const mainReducer = combineReducers({
  toast,
  auth: persistedReducer,
});
const origStore = createStore(mainReducer, {}, applyMiddleware(ReduxThunk));
const origPersistor = persistStore(origStore);

export const store = origStore;
export const persistor = origPersistor;
