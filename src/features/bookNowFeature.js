import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  load_type: 0,
  pickup_address: {
    address: "",
    lat: "",
    lng: "",
  },
  droparray: [
    {
      address: "",
      lat: "",
      long: "",
    },
  ],
};
