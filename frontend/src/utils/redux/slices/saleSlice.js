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
  },
  reducers: {
    resetSaleState: (state) => {
      state.status = null;
      state.message = "";
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendSaleRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendSaleRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.status;
        state.message = action.payload.message;
      })
      .addCase(sendSaleRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetSaleState } = saleSlice.actions;
export default saleSlice.reducer;
