import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { profileUrl } from "../../constants";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    fetchProfileResult: null,
    fetchProfileError: null,
    isFetchingProfile: false,
    value: 2,
    pathname: "/",
    token: localStorage.token,
  },
  reducers: {
    setPathname: (state, action) => {
      state.pathname = action.payload;
    },
    setProfileResult: (state, action) => {
      state.fetchProfileResult = action.payload;
      state.isFetchingProfile = false;
    },
    setProfileError: (state, action) => {
      state.fetchProfileError = action.payload;
      state.isFetchingProfile = false;
    },
    setFetchingProfile: (state, action) => {
      state.isFetchingProfile = action.payload;
    },
  },
});

export const {
  setPathname,
  setProfileResult,
  setProfileError,
  setFetchingProfile,
} = dashboardSlice.actions;

export const fetchUserProfile = () => (dispatch, getState) => {
  const config = {
    method: "post",
    url: profileUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: getState().dashboard.token,
    },
  };
  console.log("start fetching ...");
  dispatch(setFetchingProfile(true));
  const response = axios(config)
    .then((response) => {
      dispatch(setProfileResult(response.data));
    })
    .catch((response) => {
      dispatch(setProfileError(response.message));
    });

  console.log("end fetching ...");
  console.log(response);
  return response.data;
};

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// export const selectCount = (state) => state.dashboard.value;

export default dashboardSlice.reducer;
