import { configureStore } from '@reduxjs/toolkit';

import messageReducer from './messages/messageSlice';

const store = configureStore({
  reducer: {
    messages: messageReducer,
  },
});

export default store;