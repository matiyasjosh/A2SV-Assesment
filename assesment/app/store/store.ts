import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';
import singleBlogReducer from './singleBlogSlice'

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    singleBlog: singleBlogReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;