
import BlogCRUDPost from './BlogCRUDPost';

function BlogCRUDList(props) {
    return (

        <div>
            {props.posts.map(post => {
                console.log("POST",props.deletePost)
                return < BlogCRUDPost isEditing={false} submitEdit={props.submitEdit} key={post.id} {...post} deletePost={props.deletePost} editPost={props.editPost}/>
            })}
        </div>
    )
}
export default BlogCRUDList;