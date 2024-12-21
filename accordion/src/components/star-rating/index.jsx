import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';

const StartRating = ({ noOfStar = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const onHandleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const onChangeMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const onChangeMouseHover = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => onHandleClick(index)}
            onMouseEnter={() => onChangeMouseEnter(index)}
            onMouseLeave={onChangeMouseHover}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StartRating;
