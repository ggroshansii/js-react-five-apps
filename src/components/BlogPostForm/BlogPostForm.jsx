import { useState } from "react";
import { useEffect } from "react";
import './BlogPostForm.css';

function BlogPostForm() {
    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    let myStorage = window.localStorage;

    useEffect(() => {
        myStorage.setItem('blogs', JSON.stringify(blogs));
        console.log(myStorage)
    }, [blogs])

    function handleChangeTitle(event) {
        setTitle(event.target.value);
    }

    function handleChangeBody(event) {
        setBody(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let newBlog = {'title': title, 'body': body};
        setBlogs([...blogs, newBlog])
        setTitle("");
        setBody("");
    }

    return (
        <>
            <div className="blog-post-form">
                <h1> Blog Post to Local Storage </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        placeholder="Enter Title"
                        onChange={handleChangeTitle}
                    />
                    <textarea
                        name="body"
                        id=""
                        cols="30"
                        rows="10"
                        value={body}
                        placeholder="Enter Blog Post Text"
                        onChange={handleChangeBody}
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
export default BlogPostForm;
