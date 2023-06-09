import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './Greetings/greetingsReducer';

const reducer = combineReducers({
  greetings: greetingsReducer,
});

const store = configureStore({
  reducer,
});

export default store;