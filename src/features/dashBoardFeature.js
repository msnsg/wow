import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Config } from "../constants/Config";

export const serviceCall = createAsyncThunk(
  "app/serviceCall",
  async (data, { rejectWithValue }) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
      mode: "cors",
      body: JSON.stringify(data),
    };
    fetch(
      Config.SERVICE_URL + Config.WEBSERVICE_CONTROLLER + data.action,
      options
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.response !== undefined) {
          if (responseJson.response.status === "1") {
            // console.log(responseJson);
            return { responseJson, type: data.type };
          } else {
            return rejectWithValue({
              error: { type: data.type, responseJson },
            });
          }
        } else {
          return rejectWithValue({
            error: { type: data.type, responseJson },
          });
        }
      })
      .catch((error) => {
        return rejectWithValue({
          error: {
            type: data.type,
            message: error.message,
            data: error,
          },
        });
      });
  }
);

const listAddressInitialState = {
  addresslist: {},
  error: "",
  isLoading: false,
};

const getAddressListSlice = createSlice({
  name: "listAddress",
  initialState: listAddressInitialState,
  extraReducers: (builder) => {
    builder.addCase(serviceCall.pending, (state, action) => {});
  },
});

export default getAddressListSlice.reducer;
