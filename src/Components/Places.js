import React from "react";
import { data } from "./data.js";
const Places = () => {
  return (
    <>
      {data.map((place) => {
        return (
          <div key={place.id}>
            <img src={place.img} alt={place.place} />
            <h4>{place.title}</h4>
            <p>{place.price}</p>
            <p>{place.description}</p>
            <button>Not interested</button>
          </div>
        );
      })}
    </>
  );
};

export default Places;
