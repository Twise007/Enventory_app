import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    product: null,
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state, action) {
        console.log("stored value");
    }
  },
  extraReducers: (builder) => {
    
  }
});

export const {CALC_STORE_VALUE} = productSlice.actions

export default productSlice.reducer