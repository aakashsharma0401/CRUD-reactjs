import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  response: null,
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  try {
    const res = await axios.get(
      "https://visko.group/api/expenses/fetch-expenses"
    );

    return res.data;
  } catch (error) {
    return error;
  }
});

export const createUser = createAsyncThunk("CreateUser", async (body) => {
  console.log(55, body.receipt);
  const Formdata = new FormData();
  Formdata.append("ex_date", body.ex_date);
  Formdata.append("ex_category", body.ex_category);
  Formdata.append("ex_amount", body.ex_amount);
  Formdata.append("ex_payment_mode", body.ex_payment_mode);
  Formdata.append("ex_description", body.ex_description);
  Formdata.append("ex_receipt", body.ex_receipt[0]);
  Formdata.append("ex_payment_by", body.ex_payment_by);
  Formdata.append("ex_vendor", body.ex_vendor);
  try {
    const response = await axios.post(
      "https://visko.group/api/expenses/create-expense",
      Formdata
    );
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
});

export const SingleExp = createAsyncThunk("SingleExp", async (id) => {
  try {
    const response = await axios.get(
      `https://visko.group/api/expenses/single-expense?id=${id}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteExp = createAsyncThunk("deleteExp", async (id) => {
  try {
    const resp = await axios.get(
      `https://visko.group/api/expenses/remove-expense?id=${id}`
    );
    return resp.data;
  } catch (error) {
    return error;
  }
});

export const updateExp = createAsyncThunk("UpdateEx", async (body) => {
  try {
    const response = await axios.post(
      `https://visko.group/api/expenses/update-expense?id=${body?.id}`,
      body?.data
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
      state.response = null;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.warn(22, action.payload);
    });
    //adddata

    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
      state.response = null;
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log("Action payload", action.payload);
      state.isLoading = false;
      state.response = action.payload;
    });

    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log("404 Error-", action.payload);
    });

    // get single data
    builder.addCase(SingleExp.pending, (state) => {
      state.isLoading = true;
      state.response = null;
    });

    builder.addCase(SingleExp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    });

    builder.addCase(SingleExp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //update Data
    builder.addCase(updateExp.pending, (state) => {
      state.isLoading = true;
      state.response = null;
    });

    builder.addCase(updateExp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    });

    builder.addCase(updateExp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    //delete

    builder.addCase(deleteExp.pending, (state) => {
      state.isLoading = true;
      state.response = null;
    });

    builder.addCase(deleteExp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    });

    builder.addCase(deleteExp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export const { searchExp } = UserSlice.actions;
export default UserSlice.reducer;
