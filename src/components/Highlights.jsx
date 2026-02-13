import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>?
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Fast and easy to use"
              para="Get access to your favorite books in just a few clicks."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="10,000+ books to choose from"
              para="Browse our extensive collection of books and find your next favorite read."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Great deals and discounts"
              para="Enjoy exclusive discounts and deals on a wide range of books."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
