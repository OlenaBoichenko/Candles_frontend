import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const candleFetch = createAsyncThunk("candle/candleFetch", async () => {
  const response = await axios.get("https://candles-backend.onrender.com");
  return response?.data;
});

const productsSlice = createSlice({
  name: "candle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(candleFetch.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(candleFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(candleFetch.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default productsSlice.reducer;
