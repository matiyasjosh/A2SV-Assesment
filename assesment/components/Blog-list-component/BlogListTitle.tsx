import React from "react";
import Image from "next/image";
import { BlogSenderTitle} from "@/Types";



const BlogListTitle:React.FC<BlogSenderTitle> = ({ name, postedDate, career, senderImage}) => {
  return (
    <div className="w-[1/4] flex">
      <Image
        src={senderImage}
        width={79}
        height={79}
        alt="sender-image"
        className="w-[69px] h-[69px] rounded-full mr-4   "
      />

      <div className="flex flex-col">
        <div className="flex gap-2">
            <h3 className="text-[24px]">{name}</h3>
            <span className="font-extrabold">.</span>
            <span className="text-[17px] text-gray-400 mt-1">{postedDate}</span>
        </div>
        <span className="text-[17px] text-gray-400">{career}</span>
      </div>
    </div>
  );
};

export default BlogListTitle;
