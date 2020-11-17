import React from "react";

function SerpImage({ listing }) {
  return (
    <div
      className="serp-image"
      style={{
        width: 250,
        height: 125,
        maxWidth: 125,
        maxHeight: 125,
        overflow: "hidden"
      }}
    >
      <a className="listing-link" href={listing.link}>
        <img
          className="listing-image"
          src={listing.image}
          //   width="160"
          //   height="145"
        />
      </a>
    </div>
  );
}

export default SerpImage;
