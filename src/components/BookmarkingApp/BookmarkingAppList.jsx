import BookmarkingAppCard from "./BookmarkingAppCard";

function BookmarkingAppList(props) {
    return (
        <div>
        {props.bookmarks.map(bookmark => {
            console.log("fired")
            return <BookmarkingAppCard filterByTag={props.filterByTag} key={bookmark.id} {...bookmark} />
        })}
        </div>
    )
}
export default BookmarkingAppList;