// store/singleBlogSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';

interface Author {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

interface SingleBlog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: Author | null;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: string[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
}

interface SingleBlogState {
  blog: SingleBlog | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: SingleBlogState = {
  blog: null,
  status: 'idle',
  error: null,
};

// Thunk to fetch a single blog post by ID
export const fetchSingleBlog = createAsyncThunk(
  'singleBlog/fetchSingleBlog',
  async (id: string) => {
    const response = await axios.get(`https://a2sv-backend.onrender.com/api/blogs/${id}`);
    return response.data;
  }
);

const singleBlogSlice = createSlice({
  name: 'singleBlog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleBlog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSingleBlog.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blog = action.payload;
      })
      .addCase(fetchSingleBlog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch blog post';
      });
  },
});

export const selectSingleBlog = (state: RootState) => state.singleBlog.blog;
export const selectSingleBlogStatus = (state: RootState) => state.singleBlog.status;
export const selectSingleBlogError = (state: RootState) => state.singleBlog.error;

export default singleBlogSlice.reducer;
