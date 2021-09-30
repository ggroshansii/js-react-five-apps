import BlogCRUDList from "./BlogCRUDList";
import BlogCRUDForm from "./BlogCRUDForm";

import { useState, useEffect } from 'react';

function BlogCRUD() {

    const [posts, setPosts] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('POSTS', posts)
    }, [posts])

    function addPost(title, author, text, tags) {
        let newPost = {"title": title, "author": author, "text": text, "tags": tags, "id": counter}
        setPosts([...posts, newPost])
        setCounter(prevCount => prevCount + 1);
    }

    return (
        <div>
            <BlogCRUDForm addPost={addPost}/>
            <BlogCRUDList />
        </div>
    )
}
export default BlogCRUD;