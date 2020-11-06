import React, {useState, useEffect} from 'react';

import LookupForm from './LookupForm';

function PriceLookup(props) {

    const [listings, setListings] = useState(props.list)
    const [averagePrice, setPrice] = useState(props.averagePrice)

    useEffect(() => {
        setListings(props.list)
        setPrice(props.averagePrice)
    }, [props])

    const handleSubmit = (e, itemName) => {
        e.preventDefault();
        props.fetchListing(itemName)
    }

    return (
        <div className="price-lookup">
            <LookupForm 
            listings={listings} 
            averagePrice={averagePrice} 
            handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default PriceLookup
