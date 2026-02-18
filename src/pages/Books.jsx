import React, { useState } from "react";
import { books as booksData } from "../data.js";
import Book from "../components/ui/Book";

const Books = () => {
  const [books, setBooks] = useState(booksData);

  function filterBooks(event) {
    const filter = event.target.value;

    let sortedBooks = [...booksData]; // always sort from original list

    if (filter === "LOW_TO_HIGH") {
      sortedBooks.sort(
        (a, b) =>
          (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice),
      );
    } else if (filter === "HIGH_TO_LOW") {
      sortedBooks.sort(
        (a, b) =>
          (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice),
      );
    } else if (filter === "RATING") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    }

    setBooks(sortedBooks);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>

                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={filterBooks}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Lowest Price</option>
                  <option value="HIGH_TO_LOW">Highest Price</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>

              <div className="books">
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
