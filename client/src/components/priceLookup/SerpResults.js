import React from "react";
import SerpImage from "./SerpImage";
import SerpLink from "./SerpLink";
import SerpPrice from "./SerpPrice";

export default function SerpResults({ listings }) {
  let results;

  if (Object.keys(listings).length > 0) {
    results = Object.keys(listings).map(id => {
      let listing = listings[id];
      return (
        <li className="serp-listing" key={id}>
          <SerpImage listing={listing} />
          <SerpLink listing={listing} />
          <SerpPrice listing={listing} />
        </li>
      );
    });
  } else {
    results = [];
  }

  return (
    <div className="srp-results" style={{ marginTop: "5vh" }}>
      <ul
        style={{
          maxHeight: "500px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          minWidth: "250px",
          justifyContent: "space-between"
        }}
      >
        {results}
      </ul>
    </div>
  );
}
