import React, { useState } from "react";
import { connect } from "react-redux";

import { fetchListing } from "../../actions/listingActions";
import SerpResults from "./SerpResults";

const InputForm = function(props) {
  const [itemName, setName] = useState("");
  const handleSubmit = props.handleSubmit;
  const listings = props.listings;
  const averagePrice = "average price: " + props.averagePrice;

  const handleChange = event => {
    setName(event.target.value);
  };

  const clearName = e => {
    e.preventDefault();
    setName("");
  };

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="nav-wrapper">
        <form onSubmit={e => handleSubmit(e, itemName)}>
          <div className="input-field z-depth-1" style={{ height: 40 }}>
            <input
              id="search"
              type="search"
              required
              onChange={handleChange}
              onKeyPress={handleKeypress}
              value={itemName}
              placeholder="item or listing name"
              id="listing_name"
            />
            <label className="label-icon" htmlFor="search">
              <i style={{ marginTop: 10 }} className="material-icons">
                search
              </i>
            </label>
            <i
              style={{ marginTop: 5 }}
              onClick={clearName}
              className="material-icons"
            >
              {" "}
              close{" "}
            </i>
          </div>
          <button className="btn waves-effect waves-light blue accent-3">
            search
          </button>
        </form>
        <h4>{Object.keys(listings).length > 0 && averagePrice}</h4>
      </div>
      <>
        <SerpResults listings={listings} />
      </>
    </>
  );
};

export default InputForm;
