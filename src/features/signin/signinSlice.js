import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { signInUrl } from "../../constants";

export const signinSlice = createSlice({
  name: "signin",
  initialState: {
    fetchSigninResult: null,
    fetchSigninError: null,
    isFetchingSignin: false,
    redirectToDashboard:false
  },
  reducers: {
    setSigninResult: (state, action) => {
      state.fetchSigninResult = action.payload;
      state.isFetchingSignin = false;
      state.redirectToDashboard = true;
    },
    setSigninError: (state, action) => {
      state.fetchSigninError = action.payload;
      state.isFetchingSignin = false;
    },
    setFetchingSignin: (state, action) => {
      state.isFetchingSignin = action.payload;
    },
  },
});

export const {
  setSigninResult,
  setSigninError,
  setFetchingSignin,
} = signinSlice.actions;

export const fetchSignin = (data) => (dispatch, getState) => {
  const config = {
    method: "post",
    url: signInUrl,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  dispatch(setFetchingSignin(true));
  const response = axios(config)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      dispatch(setSigninResult(response.data));
    })
    .catch((response) => {
      dispatch(setSigninError(response.message));
    });

  return response.data;
};

export default signinSlice.reducer;
