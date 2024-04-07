// import { useState } from "react";
import "./App.css";
import "./Book.css";
import { Book } from "./Book";
import { books } from "./books";

function App() {
  return (
    <>
      {books.map((book, index) => (
        <Book
          coverAddress={book.cover}
          title={book.title}
          author={book.title}
          key={book.id}
          position={index}
        />
      ))}
    </>
  );
}

export default App;
