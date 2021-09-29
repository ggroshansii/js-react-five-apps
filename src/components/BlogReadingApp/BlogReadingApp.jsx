import { useState, useEffect } from "react";
import BlogReadingList from "./BlogReadingList";
import "./BlogReadingApp.css";

function BlogReadingApp() {
    const [selection, setSelection] = useState();
    const [blogs, setBlogs] = useState([
        {
            title: "Is Gardening Still Relevant?",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            id: 0,
        },
        {
            title: "The Reason Why Everyone Love Gardening",
            body: "Sed cras ornare arcu dui. At quis risus sed vulputate odio ut. Lectus magna fringilla urna porttitor. Elementum sagittis vitae et leo duis ut diam quam. Tristique risus nec feugiat in fermentum. Diam in arcu cursus euismod quis viverra nibh. Urna nec tincidunt praesent semper feugiat nibh sed. Eu tincidunt tortor aliquam nulla facilisi. Magna etiam tempor orci eu lobortis elementum. Ornare quam viverra orci.",
            id: 1,
        },
        {
            title: "Seven Easy Rules Of Gardening",
            body: "Leo vel orci porta non pulvinar neque laoreet. Tincidunt ornare massa eget egestas purus viverra. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Est pellentesque elit ullamcorper dignissim. Vulputate ut pharetra sit amet aliquam.",
            id: 2,
        },
        {
            title: "The Latest Trend In Gardening",
            body: "Vitae et leo duis ut diam quam nulla porttitor. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Et ultrices neque ornare aenean euismod. Mattis pellentesque id nibh tortor id. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Massa massa ultricies mi quis. ",
            id: 3,
        },
        {
            title: "The Truth About Gardening Is About To Be Revealed",
            body: "Et ultrices neque ornare aenean euismod elementum nisi quis. Etiam sit amet nisl purus in mollis. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Fermentum iaculis eu non diam phasellus vestibulum.",
            id: 4,
        },
    ]);

    function displayBlogPost(id) {
        // console.log(id);
        let index = blogs.findIndex((element) => element.id === id);
        const selectedBlog = blogs[index];
        setSelection(selectedBlog);
        // console.log(selectedBlog);
    }

    return (
        <>
            <div className="main-container">
                <div className="blog-title-container">
                    <BlogReadingList
                        blogs={blogs}
                        displayBlogPost={displayBlogPost}
                    />
                </div>
                <div className="blog-body-container">
                    {selection && (
                        <div>
                            <h2>{selection.title}</h2>
                            <li>{selection.body}</li>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default BlogReadingApp;
