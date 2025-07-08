import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api";

// POST to discount
export const sendSaleRequest = createAsyncThunk(
  "sale/send",
  async (formData, thunkAPI) => {
    try {
      const res = await API.post("/sale/send", formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.message || "Failed to request sale"
      );
    }
  }
);

const saleSlice = createSlice({
  name: "sale",
  initialState: {
    status: null,
    message: "",
    loading: false,
    error: null,
    success: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendSaleRequest.pending, (state) => {
        state.loading = true;
        state.status = null;
        state.message = "";
        state.error = null;
        state.success = null;
      })
      .addCase(sendSaleRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.status;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(sendSaleRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default saleSlice.reducer;
