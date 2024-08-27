import Button from "../ui/Button"

const BlogSearch = () => {
  return (
    <div className="w-[50%] flex justify-between mt-2">
      <h1 className="text-[32px]">Blogs</h1>

      <div className="flex gap-2">
        <input type="text" placeholder="Search..." className="border-gray-300 border-[1px] text-20px rounded-full py-2 px-10 outline-none"/>
        <Button text="+ New Blog" round="rounded-full"/>
      </div>
    </div>
  )
}

export default BlogSearch
