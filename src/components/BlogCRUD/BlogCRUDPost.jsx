
import "./BlogCRUDPost.css";

function BlogCRUDPost(props) {
    return (
        <div className="blog-post-container">
            <div className="blog-post-buttons">
                <button onClick={() => props.deletePost(props.id)}>Delete</button>
                <button>Edit</button>
            </div>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.text}</p>
            <p>#{props.tags}</p>
        </div>
    )
}
export default BlogCRUDPost;