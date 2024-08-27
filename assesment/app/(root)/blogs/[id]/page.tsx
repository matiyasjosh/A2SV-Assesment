// app/blogs/[id]/page.tsx
"use client"
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store/store';
import { fetchBlogById } from '@/app/store/blogSlice'; // Import the new action
import Image from 'next/image';
import BlogProfile from '@/components/blog-page-components/BlogProfile';

interface BlogDetailProps {
    params: {
        id: string; // Define the type for the dynamic parameter
    };
}

const BlogDetail: React.FC<BlogDetailProps> = ({ params }) => {
    const dispatch: AppDispatch = useDispatch();
    const { singleBlog, status, error } = useSelector((state: RootState) => state.blog); // Use singleBlog state

    useEffect(() => {
        if (params.id) {
            dispatch(fetchBlogById(params.id)); // Dispatch action to fetch the blog by ID
        }
    }, [params.id, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        console.error('Error fetching blog:', error);
        return <div>Error: {error}</div>;
    }

    if (!singleBlog) {
        return <div>No blog found.</div>;
    }

    return (
        <div className='w-[80%] mx-auto mt-10'>
            {/* header part */}
            <div className="flex justify-center flex-col items-center mt-10">
                <h1 className='text-2xl mb-1'>{singleBlog.title}</h1>
                <div className="flex text-[15px] gap-1">
                    {singleBlog.tags.map((tag, index) => (
                        <span key={index} className='text-gray-600'>
                            {tag.toUpperCase()}
                            {index < singleBlog.tags.length - 1 && ', '}
                        </span>
                    ))}
                    <span className='text-gray-500'>|</span>
                    <span className='text-gray-600'>6 MIN READ</span>
                </div>
            </div>

            <Image src={singleBlog.image} alt='blog image' height={500} width={1200} className='mx-auto mt-7'/>

            <div className='flex justify-center items-center mt-10'>
                <BlogProfile 
                    name={singleBlog?.author?.name || 'Unknown Author'} // Use optional chaining and default value
                    department='Software Engineering' 
                    email={singleBlog?.author?.email || 'No email provided'} // Use optional chaining and default value
                />
            </div>
            
            <div className='w-[83%] mx-auto mt-7'>
                <p className='text-[20px] mx-auto pb-4'>{singleBlog.description}</p>
                <p className='text-[20px] mx-auto pb-4 text-gray-500'>{singleBlog.description}</p>
                <p className='text-[20px] mx-auto pb-4 text-gray-500'>{singleBlog.description}</p>
                
            </div>
        </div>
    );
};

export default BlogDetail;
