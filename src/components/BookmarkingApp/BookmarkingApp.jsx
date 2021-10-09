import BookmarkingAppForm from "./BookmarkingAppForm";
import BookmarkingAppList from "./BookmarkingAppList";
import { useState, useEffect, useRef} from "react";

function BookmarkingApp() {

    const [bookmarks, setBookmarks] = useState([]);
    const [counter, setCounter] = useState(0);
    const [filter, setFilter] = useState();
    const firstRender = useRef(true);


    if (firstRender.current) {
        firstRender.current = false;
        let item = localStorage.getItem("bookmarks")
        setBookmarks(JSON.parse(item))
        console.log("item", typeof item)
        console.log("iniital bookmarks", bookmarks)
    }

    useEffect(() => { 
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }, [bookmarks])


    function addBookmark(url, title, tag) {
        let newBookmark = {'url': url, 'title': title, 'tag': tag, 'id': counter};
        setBookmarks([...bookmarks, newBookmark]);
        setCounter(prevCount => prevCount + 1);
        console.log("added new bookmark", bookmarks)
    }




    
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
