import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Config } from "../constants/Config";
import { apiMethods } from "../constants/Constants";

export const callCommunication = createAsyncThunk(
  "communication/callCommunication",
  async (data, { rejectWithValue }) => {
    //     let loggedUser = JSON.parse(localStorage.getItem('users'));
    //     let customerId = 0;
    //     let authToken = 0;
    //     if(loggedUser !=undefined){
    //        customerId = loggedUser.userid;
    //        authToken = loggedUser.auth_token;
    //       if (type === 'bookinglist' || type === 'postfeedback'){
    //          data.user_id = customerId;
    //        }else{
    //          data.customer_id = customerId;
    //        }
    //        data.auth_token = authToken;
    //        data = JSON.stringify(data);
    //    }

    data.customer_id = "45757";
    // data.auth_token = "EW8VT13lE9OtDViALTfXpPzY9q-jO5BU";
    data.auth_token = "MXbczzht3xPpdBJ0B1A9ziNUJcsbcev7";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const URL =
      Config.SERVICE_URL +
      Config.WEBSERVICE_CONTROLLER +
      apiMethods.COMMUNICATION_UPDATE;

    try {
      const response = await fetch(URL, options);
      const responseJson = await response.json();
      console.log(responseJson);

      if (responseJson.response !== undefined) {
        console.log("Come inside");

        if (responseJson.response.status === 1) {
          if (data.communication_id !== undefined) {
            responseJson.response.data.communication_id = data.communication_id;
          }

          return responseJson.response;
        } else {
          return rejectWithValue({
            error: responseJson.response,
          });
        }
      } else {
        return rejectWithValue({
          error: responseJson,
        });
      }
    } catch (error) {
      return rejectWithValue({
        error: error.message,
      });
    }
  }
);

const initialState = {
  updates: {},
  error: "",
  isLoading: false,
  status: "",
};

const communicationSlice = createSlice({
  name: "communication",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(callCommunication.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(callCommunication.fulfilled, (state, action) => {
      state.error = "";
      state.isLoading = false;
      state.updates = {
        communication_res: action.payload.data.message,
      };

      state.status = action.payload.status;
    });
    builder.addCase(callCommunication.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.status = action.payload.error.status;
      state.updates = {};
    });
  },
});

export default communicationSlice.reducer;
