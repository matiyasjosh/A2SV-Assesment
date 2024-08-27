"use client"
import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { RootState, AppDispatch } from '@/app/store/store';
import { fetchBlogs } from '@/app/store/blogSlice';
import SingleBlogList from './SingleBlogList';
import Link from 'next/link';

const BlogList:React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { blogs, status, error } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='w-[80%] mx-auto mt-10'>
      {
        blogs.map((blog) => (
          <>
            <hr className='py-5'/>
            <Link key={blog._id} href={`/blogs/${blog._id}`}>
              <SingleBlogList name={"Manyawkal Yhenin"} postedDate={blog.createdAt} career={"Software Engineer"} title={blog.title} description={blog.description} tags={blog.tags} image={blog.image} senderImage='/wallpaper.jpg' />
            </Link>
          </>
        ))
      }
    </div>
  )
}

export default BlogList
