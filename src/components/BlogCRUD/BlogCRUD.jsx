import BlogCRUDList from "./BlogCRUDList";
import BlogCRUDForm from "./BlogCRUDForm";

import { useState, useEffect } from 'react';

function BlogCRUD() {

    const [posts, setPosts] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
        console.log("POSTS IN STORAGE", [...posts])
        console.log("LOCAL STORAGE", localStorage)
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

    function editPost(id) {
        let index = posts.findIndex((element) => element.id === id);
        let editedPosts = [...posts];
        editedPosts[index].text = "";
        editedPosts[index].isEditing = true;
        setPosts(editedPosts);
    }

    function submitEdit(id, newText) {
        let index = posts.findIndex((element) => element.id === id);
        let editedPosts = [...posts];
        editedPosts[index].text = newText;
        editedPosts[index].isEditing = false;
        setPosts(editedPosts);
    }

    return (
        <div>
            <BlogCRUDForm addPost={addPost}/>
            <BlogCRUDList posts={posts} deletePost={deletePost} editPost={editPost} submitEdit={submitEdit}/>
        </div>
    )
}
export default BlogCRUD;