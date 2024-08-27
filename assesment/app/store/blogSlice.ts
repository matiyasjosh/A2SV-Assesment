import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface BlogPost {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: any;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: any[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface BlogState {
  blogs: BlogPost[];
  singleBlog: BlogPost | null; // Add state for a single blog
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  singleBlog: null, // Initialize singleBlog state
  status: 'idle',
  error: null,
};

// Async thunk to fetch blog posts from API
export const fetchBlogs = createAsyncThunk('blog/fetchBlogs', async () => {
  const response = await axios.get('https://a2sv-backend.onrender.com/api/blogs');
  return response.data;
});

// Async thunk to fetch a single blog post by ID
export const fetchBlogById = createAsyncThunk('blog/fetchBlogById', async (id: string) => {
  const response = await axios.get(`https://a2sv-backend.onrender.com/api/blogs/${id}`);
  return response.data;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(fetchBlogById.pending, (state) => {
        state.status = 'loading';
        state.singleBlog = null; // Reset singleBlog state while loading
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.singleBlog = action.payload; // Set the fetched single blog
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch blog';
      });
  },
});

export default blogSlice.reducer;