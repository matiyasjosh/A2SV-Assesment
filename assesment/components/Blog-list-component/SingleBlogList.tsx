import React from "react";
import Image from "next/image";
import BlogListTitle from "./BlogListTitle";
import { BlogPostListProps } from "@/Types";

const SingleBlogList: React.FC<BlogPostListProps> = ({
  name,
  postedDate,
  career,
  title,
  description,
  tags,
  image,
  senderImage
}) => {
  return (
    <div className="flex">
      {/* Content Column */}
      <div className="flex-1 pr-6">
        <BlogListTitle name={name} postedDate={postedDate} career={career} senderImage={senderImage}/>
        <h1 className="text-[34px] font-bold my-5">{title}</h1>
        <p className="text-[24px] text-[#737373] pb-7">{description}</p>

        <div>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-[#8E8E8E] bg-gray-200 mr-2 py-2 px-4 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image Column */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt="jal"
          width={349}
          height={195}
          className=""
        />
      </div>
    </div>
  );
};

export default SingleBlogList;
