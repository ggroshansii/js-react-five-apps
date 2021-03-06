

function Header(props) {

function handleInput(event) {
    props.changeApp(event.target.value);
}


    return (
        <>
            <button type="button" name="blogForm" value="blogForm" onClick={handleInput}>
                Blog Form
            </button>
            <button type="button" name="contactForm" value="contactForm" onClick={handleInput}>
                Contact Form
            </button>
            <button type="button" name="blogReadingApp" value="blogReadingApp" onClick={handleInput}>
                Blog Reading App
            </button>
            <button type="button" name="bookmarkingApp" value="bookmarkingApp" onClick={handleInput}>
                Bookmarking App
            </button>
            <button type="button" name="blogCRUD" value="blogCRUD" onClick={handleInput}>
                Blog App
            </button>
        </>
    );
}

export default Header;
