
import BlogCRUDPost from './BlogCRUDPost';

function BlogCRUDList(props) {
    return (
        <div>
            {props.posts.map(post => {
                return < BlogCRUDPost {...post} />
            })}
        </div>
    )
}
export default BlogCRUDList;