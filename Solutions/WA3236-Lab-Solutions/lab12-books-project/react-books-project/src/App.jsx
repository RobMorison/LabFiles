import React, { useState, useEffect } from 'react'
import './App.css'
import ApiTest from './ApiTestComponent';
import BookList from './components/booklist';
import BookForm from './components/bookform';
import { getBooks } from './rest';

function App() {
  const [refreshFlag, setRefreshFlag] = useState(0);
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    let promise = getBooks();
    promise.then(
      (text) => {
        let bookArray = JSON.parse(text);
        setBooks(bookArray);
      }
    )
  }, [refreshFlag]);

  const Conditional = function () {
    if (selectedBook != null) {
      return <BookForm book={selectedBook}
        refresh={refresh} 
        setBook={setSelectedBook}
      />
    }
    return <div />
  }

  const refresh = function (noChanges = false) {
    if (!noChanges) {
      setRefreshFlag(refreshFlag + 1);
    }
    setSelectedBook(null);
  }

  return (
    <div className="App">
      <h3>React Book Project</h3>
      <BookList books={books}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
      />
      <Conditional />
    </div>
  );
}

export default App
