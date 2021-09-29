


function BlogReadingCard(props) {
    return (
        <>
        <div className="blog-title-container">
            <button id={props.id} onClick={() => props.displayBlogPost(props.id)}>{props.title}</button>
        </div>
        </>
    )
}
export default BlogReadingCard;