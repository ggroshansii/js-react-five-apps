import BlogCRUDList from "./BlogCRUDList";
import BlogCRUDForm from "./BlogCRUDForm";

import { useState } from 'react';

function BlogCRUD() {



    return (
        <div>
            <BlogCRUDForm />
            <BlogCRUDList />
        </div>
    )
}
export default BlogCRUD;