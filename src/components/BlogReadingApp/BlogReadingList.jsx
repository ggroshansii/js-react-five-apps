
import BlogReadingCard from "./BlogReadingCard";

function BlogReadingList(props) {
    return (
        <>
        {console.log("props here", props)}
        {/* Loop through individual blogcards here */}
        {props.blogs.map(blog => {
            return <BlogReadingCard {...blog} key={blog.id} />
            console.log(<BlogReadingCard {...blog} key={blog.id} />)
        })
        }

        </>
    )
}
export default BlogReadingList;