import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import fetchAllVideos from "../services/youtube";

const initialState = {
  isLoading: false,
  error: "",
  data: {},
};

export const fetchVideos = createAsyncThunk("videos/getVideos", async () => {
  const { data } = await fetchAllVideos();
  return data;
});

const videosSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.isLoading = initialState.isLoading;
      state.data = action.payload;
      state.error = initialState.error;
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.isLoading = initialState.isLoading;
      state.data = initialState.data;
      state.error = action.error.message;
    });
  },
  reducers: {
    fetchVideoById: (state) => {
      state.data = true;
    },
  },
});

export const { fetchVideoById } = videosSlice;
export const selectVideos = (state) => state.videos;
export default videosSlice.reducer;
