import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

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

const separateVideosForUseCase = (videoListStore) => {
  const videoList = [...videoListStore];
  const videoOnPlayer = videoList.shift() || {};
  const nextVideos = videoList.splice(0, 3) || [];
  const moreVideos = videoList || [];
  return { videoOnPlayer, nextVideos, moreVideos };
};

const changeVideosOrder = (videoId, videoListStore) => {
  const videoList = [...videoListStore];
  let videoToPlay = {};

  videoList.forEach((item, index) => {
    if (item.id === videoId) {
      videoToPlay = videoList.splice(index, 1).shift();
    }
  });

  videoList.unshift(videoToPlay);
  return videoList;
};

const videosSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchVideoById: (state) => {
      state.data = true;
    },
    playVideo: (state, { payload }) => {
      const currentState = current(state);
      const newVideosOrder = changeVideosOrder(
        payload,
        currentState.data.items
      );
      state.data.items = newVideosOrder;
      state.data.itemsByUse = separateVideosForUseCase(newVideosOrder);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchVideos.fulfilled, (state, { payload }) => {
      state.isLoading = initialState.isLoading;
      state.data = {
        ...payload,
        itemsByUse: separateVideosForUseCase(payload.items),
      };
      state.error = initialState.error;
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.isLoading = initialState.isLoading;
      state.data = initialState.data;
      state.error = action.error.message;
    });
  },
});

export const { fetchVideoById, playVideo } = videosSlice.actions;
export const selectVideos = (state) => state.videos;
export default videosSlice.reducer;
