import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoadingReg: false,

  register_details: {
    register_phone: "",
    city_id: "",
    company_name: "",
    customer_address: "",
    customer_address1: "",
    customer_gst_no: "",
    customer_id: "",
    email: "",
    first_name: "",
    lang_id: "",
    username: "",
  },

  isRegUserStatus: false,
  errorReg: "",
};

const BASEURL1 =
  "https://admin-staging.wowtruck.in/customerapp/registerupdate_v2";

export const registerUserUpdate = createAsyncThunk(
  "user_details/registerUserUpdate",
  async (body, { rejectWithValue }) => {
    try {
      let loggedUser = JSON.parse(localStorage.getItem("users"));

      let customerId = 0;
      let authToken = 0;
      if (loggedUser != undefined) {
        customerId = loggedUser.userid;
        authToken = loggedUser.auth_token;
        body.customer_id = customerId;
        body.auth_token = authToken;
      }

      const options = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
      };

      const response = await fetch(BASEURL1, options);
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
      return rejectWithValue({ error: `Opps!, ${error}` });
    }
  }
);

//-----UPDATE THE REGISTER USER----------------

const registerFeaturesSlice = createSlice({
  name: "registerFeatures",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserUpdate.pending, (state) => {
        state.isLoadingReg = true;
        state.errorReg = null;
      })
      .addCase(registerUserUpdate.fulfilled, (state, action) => {
        state.isLoadingReg = false;
        state.isRegUserStatus = true;

        // localStorage.setItem(
        //   "register_users_update",
        //   JSON.stringify(action.payload)
        // );
      })
      .addCase(registerUserUpdate.rejected, (state, action) => {
        state.isLoadingReg = false;
        state.errorReg = action.payload.error;
        state.isRegUserStatus = false;
      });
  },
});

export const selectRegisterDetails = (state) =>
  state.registerFeatures.register_details;

export const { setLoginPhone } = registerFeaturesSlice.actions;

export default registerFeaturesSlice.reducer;
