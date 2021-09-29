import BookmarkingAppForm from "./BookmarkingAppForm";
import BookmarkingAppList from "./BookmarkingAppList";
import { useState } from "react";

function BookmarkingApp() {

    const [bookmarks, setBookmarks] = useState([]);

    function addBookmark(url, title, tag) {
        let newBookmark = {'url': url, 'title': title, 'tag': tag};
        setBookmarks([...bookmarks, newBookmark]);
        console.log("added new bookmark", bookmarks)
    }

    return (
        <div>
            <BookmarkingAppForm addBookmark={addBookmark} />
            <BookmarkingAppList bookmarks={bookmarks}/>
        </div>
    );
}
export default BookmarkingApp;
