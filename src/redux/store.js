import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import videoSlice from "./videoSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    videos: videoSlice,
  },
});
