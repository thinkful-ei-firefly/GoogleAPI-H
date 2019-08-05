import React from "react";

const Book = ({ bookInfo, priceInfo }) => {
  const { title, author, description, imageLinks } = bookInfo;

  return (
    <section className="book">
      <img className="book-image" src={imageLinks.thumbnail} alt="book cover" />
      <h2>{title} </h2>
      <h4>{author ? author[0] : ""}</h4>
      <h4>
        {priceInfo
          ? priceInfo.listPrice
            ? `Price: ${priceInfo.listPrice.amount}`
            : ""
          : ""}
      </h4>
      <p>{description}</p>
      <hr />
    </section>
  );
};

export default Book;
