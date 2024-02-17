import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
