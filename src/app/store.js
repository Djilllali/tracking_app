import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import signinReducer from '../features/signin/signinSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
export default configureStore({
  reducer: {
    counter: counterReducer,
    signin:signinReducer,
    dashboard: dashboardReducer,
  },
});
