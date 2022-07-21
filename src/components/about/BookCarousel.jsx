import React from "react";
import { BOOKS } from "../../constants/BOOKS";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookCard from "./BookCard";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./bookcarousel.css";

const BookCarousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="bookcarousel"
    >
      {BOOKS.map((book, index) => (
        <SwiperSlide>
          <BookCard
            title={book.title}
            author={book.author}
            category={book.category}
            image={book.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BookCarousel;
