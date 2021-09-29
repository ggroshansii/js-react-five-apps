


function BlogReadingCard(props) {
    return (
        <>
        <div className="blog-title-container">
            <p>{props.title}</p>
            {console.log("PROPS IN CARD", props)}
        </div>
        </>
    )
}
export default BlogReadingCard;