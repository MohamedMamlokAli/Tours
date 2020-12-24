import React, { useReducer } from "react";
import { data } from "./data.js";
import { reducer } from "./reducer";
const stateDefault = {
  places: data,
};
const Places = () => {
  const [state, dispatch] = useReducer(reducer, stateDefault);

  return (
    <>
      {state.places.length > 0 ? (
        state.places.map((place) => {
          return (
            <div key={place.id} className="single-tour">
              <img src={place.img} alt={place.place} />
              <div className="info">
                <h4>{place.title}</h4>
                <h4 className="prices">{place.price}</h4>
              </div>
              <p className="description">{place.description}</p>
              <button
                className="btn"
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: place.id })
                }
              >
                Not interested
              </button>
            </div>
          );
        })
      ) : (
        <>
          <div>
            <h2>No Tours Left</h2>
            <button className="btn" onClick={() => window.location.reload()}>
              Refresh
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Places;
