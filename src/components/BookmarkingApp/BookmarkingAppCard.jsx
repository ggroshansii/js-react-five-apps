import "./BookmarkingAppCard.css";

function BookmarkingAppCard(props) {
    return (
        <>  
            <div className="bookmark-card">
                {console.log("CARD", props)}
                <p>{props.url}</p>
                <p>{props.title}</p>
                <p>#{props.tag}</p>
            </div>
        </>
    );
}
export default BookmarkingAppCard;
