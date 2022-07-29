import React, { useState } from "react";

const Rating = () => { 
      const [rating, setRating] = useState(0);
        const [hover, setHover] = useState(0); 
 return (
    <div className="star-rating text-xs">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
          style={{
            'background-color': 'transparent',
  border: "none",
  outline: 'none',
  cursor: 'pointer'
          }}
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star text-xs">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;