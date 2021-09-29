import BookmarkingAppForm from "./BookmarkingAppForm";
import BookmarkingAppList from "./BookmarkingAppList";
import { useState } from "react";

function BookmarkingApp() {

    const [bookmarks, setBookmarks] = useState([]);
    const [counter, setCounter] = useState(0);

    function addBookmark(url, title, tag) {
        let newBookmark = {'url': url, 'title': title, 'tag': tag, 'id': counter};
        setBookmarks([...bookmarks, newBookmark]);
        setCounter(prevCount => prevCount + 1);
        console.log("added new bookmark", bookmarks)
    }

    function filterByTag(tag) {
        let filteredBookmarks = bookmarks.filter(element => element.tag === tag)
        console.log("FILTERED", filteredBookmarks);
    }

    return (
        <div>
            <BookmarkingAppForm addBookmark={addBookmark} />
            <BookmarkingAppList bookmarks={bookmarks} filterByTag={filterByTag}/>
        </div>
    );
}
export default BookmarkingApp;
