import React from "react";

function SerpLink({ listing }) {
  return (
    <div style={{ width: 145 }}>
      <a className="listing-link" href={listing.link}>
        <h4
          style={{
            fontSize: "1rem",
            margin: "1.52rem 0 .912rem 0",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {listing.title}
        </h4>
      </a>
    </div>
  );
}

export default SerpLink;
