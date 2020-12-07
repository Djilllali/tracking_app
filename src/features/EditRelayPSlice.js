import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getrelaypoint } from "../../constants";

const initState = {
  lat: 36.7753606,
  lng: 3.0601882,
};
export const EditRelayPSlice = createSlice({
  name: "EditRelayPSlice",
  initialState: {
    RPcoordinates: initState,
    RPadress: "",
    RPwilaya: false,
    RPis_active: true,
    RPspace_availability: 3.1,
    RPtime_availability: false,
    RPdeliveries: [],
    RPactive_deliveries: [],
  },
  reducers: {
    setRPcoordinates: (state, action) => {
      state.RPcoordinate = action.payload;

    },
    setRPadress: (state, action) => {
      state.RPadress = action.payload;
    },
    setRPwilaya: (state, action) => {
      state.RPwilaya = action.payload;
    },
    setRPis_active: (state, action) => {
      state.RPis_active = !state;
    },
    setRPspace_availability: (state, action) => {
      state.RPspace_availability = action.payload;
    },
    setRPtime_availability: (state, action) => {
      state.RPtime_availability = action.payload;
    },
    setRPdeliveries: (state, action) => {
      state.RPdeliveries = action.payload;
    },
    setRPactive_deliveries: (state, action) => {
      state.RPactive_deliveries = action.payload;
    },
  },
});

export const {
  setRPcoordinates,
  setRPadress,
  setRPwilaya,
  setRPis_active,
  setRPspace_availability,
  setRPtime_availability,
  setRPdeliveries,
  setRPactive_deliveries,

} = signinSlice.actions;

export const fetchRP = (data) => (dispatch, getState) => {
  const config = {
    method: "post",
    url: getrelaypoint,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

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


export default RelayPSlice.reducer;
