import React, { useState } from "react";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(5);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  const ratingArray = Array.from(Array(10).keys());

  return (
    <ul className="rating">
      {[
        ratingArray.map((item, index) => {
          return (
            <li key={`item${item + 1}`}>
              <input
                type="radio"
                id={"num" + index}
                name="rating"
                value={item + 1}
                onChange={handleChange}
                checked={selected === item + 1}
              />
              <label htmlFor={"num" + index}>{item + 1}</label>
            </li>
          );
        }),
      ]}
    </ul>
  );
}

export default RatingSelect;
