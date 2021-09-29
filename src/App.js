import './App.css';
import Header from './components/Header/Header'
import BlogPostForm from './components/BlogPostForm/BlogPostForm'
import ContactForm from './components/Contacts/ContactForm'
import BlogReadingApp from './components/BlogReadingApp/BlogReadingApp'
import BookmarkingApp from './components/BookmarkingApp/BookmarkingApp';
import BlogCRUD from './components/BlogCRUD/BlogCRUD';


import {useState} from 'react';

function App() {

  const [selection, setSelection] = useState('blogForm');

  function changeApp(value) {
   setSelection(value);
  }

  let html;
  switch (selection) {
    case 'blogForm':
      html = <BlogPostForm />
      break;
    case 'contactForm':
      html = <ContactForm />
      break;
    case 'blogReadingApp':
      html = <BlogReadingApp />
      break;
    case 'bookmarkingApp':
      html = <BookmarkingApp />
      break;
    case 'blogCRUD':
      html = <BlogCRUD />
      break;
    default: 
      console.log("ERROR SWITCHING SELECTIONS");
  }

  return (
    <div className="App">
        <Header changeApp={changeApp}/>
      {html}
    </div>
  );
}

export default App;
