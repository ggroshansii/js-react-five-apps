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

    // function deletePost(id) {
    //     let index = posts.findIndex((element) => element.id === id);
    //     console.log("index", index)
    //     let revisedPosts = posts.splice(index,1);
    //     console.log("revised Posts", revisedPosts)
    //     setPosts(revisedPosts);
    //     console.log("at end of delete", posts)
    // }

    // function deletePost(id) {
    //     let index = posts.findIndex((element) => element.id === id);
    //     console.log("index", index)
    //     let revisedPosts = [...posts].splice(index,1);
    //     console.log("revised Posts", revisedPosts)
    //     setPosts(revisedPosts);
    //     console.log("at end of delete", posts)
    // }

    function deletePost(id) {
        let index = posts.findIndex((element) => element.id === id);
        console.log("index", index)
        let revisedPosts = [...posts];
        revisedPosts.splice(index,1);
        console.log("revised Posts", revisedPosts)
        setPosts(revisedPosts);
        console.log("at end of delete", posts)
    }

    return (
        <div>
            <BlogCRUDForm addPost={addPost}/>
            <BlogCRUDList posts={posts} deletePost={deletePost}/>
        </div>
    )
}
export default BlogCRUD;