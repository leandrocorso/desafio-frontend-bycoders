import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { fetchAll, search } from "../services/youtube";

const initialState = {
  isLoading: false,
  error: "",
  data: {},
  searchTerms: [],
};

export const fetchVideos = createAsyncThunk("videos/getVideos", async () => {
  const { data } = await fetchAll();
  const items = data.items.map((item) => ({
    ...item,
    videoId: item.id,
  }));
  return { ...data, items };
});

export const searchVideos = createAsyncThunk(
  "videos/searchVideos",
  async (keyword) => {
    const { data } = await search(keyword);
    const items = data.items.map((item) => ({
      ...item,
      videoId: item.id.videoId,
    }));
    return { ...data, items };
  }
);

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
    if (item.videoId === videoId) {
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
    // Fetch
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

    // Search
    builder.addCase(searchVideos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchVideos.fulfilled, (state, { payload }) => {
      // const { searchTerms } = current(state);
      state.isLoading = initialState.isLoading;
      // state.searchTerms = searchTerms.push(payload);
      state.data = {
        ...payload,
        itemsByUse: separateVideosForUseCase(payload.items),
      };
      state.error = initialState.error;
    });
    builder.addCase(searchVideos.rejected, (state, action) => {
      state.isLoading = initialState.isLoading;
      state.data = initialState.data;
      state.error = action.error.message;
    });
  },
});

export const { playVideo } = videosSlice.actions;
export const selectVideos = (state) => state.videos;
export default videosSlice.reducer;
