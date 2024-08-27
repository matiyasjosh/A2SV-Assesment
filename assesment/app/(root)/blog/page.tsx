import BlogList from "@/components/Blog-list-component/BlogList"
import BlogSearch from "@/components/blog-search/BlogSearch"

const page = () => {
  return (
    <div className="w-[80%]">
      <BlogSearch />
      <BlogList />
    </div>
  )
}

export default page
