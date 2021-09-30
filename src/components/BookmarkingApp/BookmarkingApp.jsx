import BookmarkingAppForm from "./BookmarkingAppForm";
import BookmarkingAppList from "./BookmarkingAppList";
import { useState } from "react";

function BookmarkingApp() {

    const [bookmarks, setBookmarks] = useState([]);
    const [counter, setCounter] = useState(0);
    const [filter, setFilter] = useState();

    function addBookmark(url, title, tag) {
        let newBookmark = {'url': url, 'title': title, 'tag': tag, 'id': counter};
        setBookmarks([...bookmarks, newBookmark]);
        setCounter(prevCount => prevCount + 1);
        console.log("added new bookmark", bookmarks)
    }

    // function filterByTag(event) {
    //     console.log("EVENT VAL", event)
    //     let filteredBookmarks = bookmarks.filter(element => element.tag === event.target.value)
    //     console.log("FILTERED", filteredBookmarks);
    // }

    const bookmarkTags = new Set(bookmarks.map(element => element.tag));

    const filteredBookmarks = bookmarks.filter(bookmark => filter ? bookmark.tag === filter : bookmark);

    return (
        <div>
            <nav>
                <button onClick={() => setFilter(undefined)}>All Tags</button>


                {Array.from(bookmarkTags).map(tag => {
                    return <button key={tag} value={tag} onClick={(event) => setFilter(event.target.value)}>#{tag}</button>
                })}
            </nav>
            <BookmarkingAppForm addBookmark={addBookmark} />
            <BookmarkingAppList bookmarks={filteredBookmarks} />
        </div>
    );
}
export default BookmarkingApp;
