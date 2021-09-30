
import { useState } from "react"

function BlogCRUDForm(props) {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const [tags, setTags] = useState("");

    function handleChangeTitle(event){
        setTitle(event.target.value)
    }
    function handleChangeAuthor(event){
        setAuthor(event.target.value)
    }
    function handleChangeText(event){
        setText(event.target.value)
    }
    function handleChangeTags(event){
        setTags(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addPost(title, author, text, tags);
    }

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input id="title" placeholder="Enter Title" type="text" value={title} name="title" onChange={handleChangeTitle}/>
                <label htmlFor="author">Author:</label>
                <input id="author" placeholder="Enter Author" type="text" value={author} name="author" onChange={handleChangeAuthor}/>
                <label htmlFor="text">Text:</label>
                <input id="text" placeholder="Enter Text" type="text" value={text} name="text" onChange={handleChangeText}/>
                <label htmlFor="tags">Tags:</label>
                <input id="tags" placeholder="Enter Tags" type="text" value={tags} name="tags" onChange={handleChangeTags}/>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}
export default BlogCRUDForm;