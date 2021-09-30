import "./BlogCRUDPost.css";
import { useState } from "react";

function BlogCRUDPost(props) {

    
    const [newText, setNewText] = useState("");

    function handleChange(event) {
        setNewText(event.target.value);
    }


        if (props.isEditing) {
            return (
                <div className="blog-post-container">
                <div className="blog-post-buttons">
                <input type="text" value={newText} onChange={handleChange} />
                <button
                    type="submit"
                    onClick={() => props.submitEdit(props.id, newText)}
                >
                    Submit Edit
                </button>
            </div>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.text}</p>
            <p>#{props.tags}</p>
        </div>
            )

        } else {
            return (
                <div className="blog-post-container">
                <div className="blog-post-buttons">
                    <button onClick={() => props.deletePost(props.id)}>
                        Delete
                    </button>
                    <button onClick={() => props.editPost(props.id)}>
                        Edit
                    </button>
                </div>
                <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.text}</p>
            <p>#{props.tags}</p>
        </div>
            )
        }
    }



    

export default BlogCRUDPost;
