import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Config } from "../constants/Config";
import { apiMethods } from "../constants/Constants";

export const getBookingHistoryCall = createAsyncThunk(
  "rides/getBookingHistoryCall",
  async (data, { rejectWithValue }) => {
    // let loggedUser = JSON.parse(localStorage.getItem("users"));

    // let customerId = 0;
    // let authToken = 0;
    // if (loggedUser != undefined) {
    //   customerId = loggedUser.userid;
    //   authToken = loggedUser.auth_token;
    //   data.customer_id = customerId;
    //   data.auth_token = authToken;
    // }

    data.auth_token = "EW8VT13lE9OtDViALTfXpPzY9q-jO5BU"
    data.customer_id ="45778"

    // data.customer_id = "45805";
    // data.auth_token = "Sb4szRciwZSbHmxDON0E-2zVrCQUQNh6";
    // data.auth_token = "EW8VT13lE9OtDViALTfXpPzY9q-jO5BU";
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
      apiMethods.GETBOOKINGHISTORY_V2;

    try {
      const response = await fetch(URL, options);
      const responseJson = await response.json();

      if (responseJson.response !== undefined) {
        if (responseJson.response.status === "1") {
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
        error: {
          type: data.type,
          message: error.message,
          data: error,
        },
      });
    }
  }
);

const trackLoadDataState = {
  trackActiveLoadData: { data: [], activetab: 0 },
  trackPastLoadData: { data: [], activetab: 0 },
  trackLoadStates: { tab1: true, tab2: true },
  error: "",
  isLoading: false,
  status: "",
};

const ridesSlice = createSlice({
  name: "rides",
  initialState: trackLoadDataState,
  reducers: {
    // toggleAccordion: (state, action) => {
    //   state.trackPastLoadData.data = state.trackPastLoadData.data.map(
    //     (item) => {
    //       return item.booking_id === action.payload.booking_id
    //         ? !item.booking_toggle_status
    //         : item;
    //     }
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getBookingHistoryCall.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getBookingHistoryCall.fulfilled, (state, action) => {
      state.error = "";
      state.isLoading = false;

      const { data, status, activetab } = action.payload;
      if (action.payload.pagecount > 1) {
        if (action.payload.activetab == 1) {
          let hasMore = true;
          if (action.payload.data.length < 5) {
            hasMore = false;
          }

          state.trackLoadStates = {
            tab1: hasMore,
            tab2: state.trackLoadStates.tab2,
          };

          state.trackPastLoadData.data.push(...data);
          state.trackPastLoadData.activetab = activetab;
          state.status = status;
        } else if (action.payload.activetab == 2) {
          let hasMore = true;
          if (action.payload.data.length < 5) {
            hasMore = false;
          }

          state.trackLoadStates = {
            tab1: state.trackLoadStates.tab1,
            tab2: hasMore,
          };

          state.trackActiveLoadData.data.push(...data);
          state.trackActiveLoadData.activetab = activetab;
          state.status = status;
        }
      } else {
        if (action.payload.activetab == 1) {
          let hasMore = true;
          if (action.payload.data.length < 5) {
            hasMore = false;
          }

          state.trackLoadStates = {
            tab1: hasMore,
            tab2: state.trackLoadStates.tab2,
          };
          state.trackPastLoadData = {
            data: data,
            activetab: activetab,
          };
          state.status = status;
          // console.log(action.payload)
        } else if (action.payload.activetab == 2) {
          let hasMore = true;
          if (action.payload.data.length < 5) {
            hasMore = false;
          }
          // console.log(action.payload)
          state.trackLoadStates = {
            tab1: state.trackLoadStates.tab1,
            tab2: hasMore,
          };
          state.trackActiveLoadData = {
            data: data,
            activetab: activetab,
          };
          state.status = status;
        }
      }
    });
    builder.addCase(getBookingHistoryCall.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.status = action.payload.error.status;
      state.trackActiveLoadData = { data: [], activetab: 0 };
      state.trackPastLoadData = { data: [], activetab: 0 };
      state.trackLoadStates = { tab1: true, tab2: true };
    });
  },
});

export const { toggleAccordion } = ridesSlice.actions;
export default ridesSlice.reducer;
