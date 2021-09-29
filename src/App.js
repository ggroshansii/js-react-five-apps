import './App.css';
import Header from './components/Header/Header'
import BlogPostForm from './components/BlogPostForm/BlogPostForm'
import ContactForm from './components/ContactForm/ContactForm'
import BlogReadingApp from './components/BlogReadingApp/BlogReadingApp'
import BookmarkingApp from './components/BookmarkingApp/BookmarkingApp';
import BlogApp from './components/BlogApp/BlogApp';


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
    case 'blogApp':
      html = <BlogApp />
  }

  return (
    <div className="App">
        <Header changeApp={changeApp}/>
      {html}
    </div>
  );
}

export default App;
