import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postService } from "../services/post";

export const postStore = configureStore({
  reducer: {
    [postService.reducerPath]: postService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postService.middleware),
});

setupListeners(postStore.dispatch);
