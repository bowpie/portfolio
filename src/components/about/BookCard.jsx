import React from "react";
import "./bookcarousel.css";

const BookCard = ({ title, author, category, image }) => {
  return (
    <div className="bookcard">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h5>by {author}</h5>
      <h5>Category: {category}</h5>
    </div>
  );
};

export default BookCard;
