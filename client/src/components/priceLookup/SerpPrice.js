import React from "react";

function SerpPrice({ listing }) {
  return (
    <div style={{ width: 145 }}>
      <a className="listing-link" href={listing.link}>
        <h4
          style={{
            fontSize: "1rem",
            margin: "-0.68rem 0px 0.912rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "rgb(0 191 29)"
          }}
        >
          {listing.price}
        </h4>
      </a>
    </div>
  );
}

export default SerpPrice;
