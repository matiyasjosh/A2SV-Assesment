import Image from 'next/image'
import React from 'react'

interface BlogProfileProp {
  name:string;
  department: string;
  email: string;
}

const BlogProfile:React.FC<BlogProfileProp> = ({name, department, email}) => {
  return (
    <div className='flex flex-col'>
      <Image src={'/wallpaper.jpg'} alt='post man' width={69} height={69} className='rounded-full w-[69px] h-[69px] mx-auto'/>

      <div >
        <span className='text-gray-600 text-[14px]'>
          {name}
        </span>
        <span>|</span>
        <span className='text-gray-600 text-[14px]'>
          {department}
        </span>
      </div>

      <span className='text-blue-500 text-[14px] mx-auto'>{email}</span>

      <p></p>

    </div>
  )
}

export default BlogProfile
