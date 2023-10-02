import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user_details: {
    login_phone: "",
    userid: "",
    username: "",
    name: "",
    aliasid: "",
    alias_type: "",
    auth_token: "",
    isVerifed: false,
  },
  isLoggedIn: false,
  error: "",
  user_info_page: "", // to idenfity login or resister page
  otp_status: "",
  isLoggedInReg: "",
};

// const BASEURL = "http://wowtruckadmin.test/customerapp/register_v2";
const BASEURL = "https://admin-staging.wowtruck.in/customerapp/register_v2";
export const login = createAsyncThunk(
  "user_details/login",
  async (body, { rejectWithValue }) => {
    try {
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
      };
      const response = await fetch(BASEURL, options);
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

const BASEURL1 = "https://admin-staging.wowtruck.in/customerapp/login_v2";

export const login_otp = createAsyncThunk(
  "user_details/login_otp",
  async (body, { rejectWithValue }) => {
    try {
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
      };
      const response = await fetch(BASEURL1, options);

      //   if (response.ok) {
      //     const jsonResponse = response.json();
      //     return jsonResponse;
      //   } else {
      //     return rejectWithValue({ error: "Enter Valid OTP" });
      //   }

      const jsonResponse = await response.json();
      if (jsonResponse.response !== undefined) {
        if (jsonResponse.response.status === "1") {
          return jsonResponse.response;
        } else {
          return rejectWithValue({
            error: "Enter Valid OTP",
          });
        }
      } else {
        return rejectWithValue({
          error: "Enter Valid OTP",
        });
      }
    } catch (error) {
      return rejectWithValue({ error: `Opps!, ${error.message}` });
    }
  }
);

const BASEURL2 = "https://admin-staging.wowtruck.in/customerapp/sendotp_v2";

export const resend_otp = createAsyncThunk(
  "user_details/resend_otp",
  async (body, { rejectWithValue }) => {
    try {
      // console.log(body);
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
      };
      const response = await fetch(BASEURL2, options);

      if (response.ok) {
        const jsonResponse = response.json();
        return jsonResponse;
      } else {
        return rejectWithValue({ error: "Enter Valid OTP" });
      }
    } catch (error) {
      return rejectWithValue({ error: `Opps!, ${error}` });
    }
  }
);

const userSlice = createSlice({
  name: "user_details",
  initialState,
  reducers: {
    back: (state, action) => {
      state.isLoggedIn = false;
      state.user_details.isVerifed = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.isLoggedIn = true;
        state.user_details.login_phone =
          action.payload.data.phone || "";
        state.user_info_page = action.meta.arg.page;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(login_otp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login_otp.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = "";
        state.isLoggedIn = true;
        state.otp_status = action.payload.status || "";
        state.user_details.auth_token =
          action.payload.data.auth_token || "";
        state.user_details.userid = action.payload.data.userid || "";
        state.user_details.login_phone =
          action.payload.data.login_phone || "";
        state.user_details.username =
          action.payload.data.username || "";
        state.user_details.name = action.payload.data.name || "";
        state.user_details.isVerifed = true;
        state.isLoggedInReg = true;
      })
      .addCase(login_otp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.user_details.isVerifed = false;
        state.isLoggedInReg = false;
      })
      .addCase(resend_otp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resend_otp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.isLoggedIn = true;

        // localStorage.setItem("resend", JSON.stringify(action.payload));
      })
      .addCase(resend_otp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
        // state.user_details = {}
      });
  },
});

export const { back, clearOtpStatus, someActionToUpdateLoginStatus } =
  userSlice.actions;
export default userSlice.reducer;
