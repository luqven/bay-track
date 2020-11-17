import React, { useState, useEffect } from "react";

import LookupForm from "./LookupForm";

function PriceLookup(props) {
  const [listings, setListings] = useState(props.list);
  const [averagePrice, setPrice] = useState(props.averagePrice);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(false);
      setListings(props.list);
      setPrice(props.averagePrice);
    },
    [props]
  );

  const handleSubmit = (e, itemName) => {
    e.preventDefault();
    setLoading(true);
    props.fetchListing(itemName);
  };

  if (loading) {
    return (
      <div className="progress">
        <div className="indeterminate" style={{ width: "70%" }} />
      </div>
    );
  }

  return (
    <div className="price-lookup">
      <LookupForm
        listings={listings}
        averagePrice={averagePrice}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default PriceLookup;
