import { useState } from "react";

function BookmarkingAppForm(props) {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");

    function handleChangeUrl(event) {
        setUrl(event.target.value);
    }

    function handleChangeTitle(event) {
        setTitle(event.target.value);
    }

    function handleChangeTag(event) {
        setTag(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addBookmark(url, title, tag);
        console.log("url:", url, "title:", title, "tag:", tag)

    }

    return (
        <div>
            <div className="overall-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="url">URL:</label>
                    <input
                        id="url"
                        type="text"
                        placeholder="Enter URL"
                        name='url'
                        value={url}
                        onChange={handleChangeUrl}
                    />
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter Title"
                        name='title'
                        value={title}
                        onChange={handleChangeTitle}
                    />
                    <label htmlFor="tag">Tag:</label>
                    <input
                        id="tag"
                        type="text"
                        placeholder="Enter Tag"
                        name='tag'
                        value={tag}
                        onChange={handleChangeTag}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default BookmarkingAppForm;
