import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchsearch = createAsyncThunk(
  "search/search",
  async (payload) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${payload}`);

      const data = await response.json();

      console.log(data);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: [],
    status: "idle",
    showModel: false,
    error: null,
  },
  reducers: {
    setShowModel: (state, action) => {
      state.showModel = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchsearch.pending, (state, action) => {
        state.status = "loading";
      })

      .addCase(fetchsearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.search = action.payload;
        state.showModel = true;
      })

      .addCase(fetchsearch.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default searchSlice.reducer;

export const { setShowModel } = searchSlice.actions;
