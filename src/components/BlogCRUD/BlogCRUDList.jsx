
import BlogCRUDPost from './BlogCRUDPost';

function BlogCRUDList(props) {
    return (

        <div>
            {props.posts.map(post => {
                console.log("POST",props.deletePost)
                return < BlogCRUDPost key={post.id} {...post} deletePost={props.deletePost}/>
            })}
        </div>
    )
}
export default BlogCRUDList;