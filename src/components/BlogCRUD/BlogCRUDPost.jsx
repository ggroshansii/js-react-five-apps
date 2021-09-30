
function BlogCRUDPost(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.text}</p>
            <p>{props.tags}</p>
        </div>
    )
}
export default BlogCRUDPost;