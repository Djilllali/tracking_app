import { createSlice } from "@reduxjs/toolkit";
import { getrelaypoint } from "../constants";
import axios from "axios";

export const RelayPSlice = createSlice({
    name: "RelayPointSlice",
    initialState: {
        fetchRPResult: null,
        fetchRPError: null,
        isFetchingRP: false,
        token: localStorage.token,
        nbreOfDocs:0,
    },
    reducers: {
        setfetchRPResult: (state, action) => {
            state.fetchRPResult = action.payload;
            state.isFetchingRP = false;
        },
        setfetchRPError: (state, action) => {
            state.fetchRPError = action.payload;
            state.isFetchingRP = false;
        },
        setisFetchingRP: (state, action) => {
            state.isFetchingRP = action.payload;
        },
    },

});

export const {
    setfetchRPResult,
    setfetchRPError,
    setisFetchingRP,
} = RelayPSlice.actions;


export const fetchRPList = (data) => (dispatch, getState) => {
    const config = {
        method: "post",
        url: getrelaypoint,
        headers: {
            "Content-Type": "application/json",

        },
        // data :{...data,query:"abd"}
    };
    console.log("start fetching ...");
    dispatch(setisFetchingRP(true));
    const response = axios(config)
        .then((response) => {
            dispatch(setfetchRPResult(response.data));
        })
        .catch((response) => {
            dispatch(setfetchRPError(response.message));
        });

    console.log("end fetching ...");
    console.log(response);
    return response.data;
};


export default RelayPSlice.reducer;