import React, {useState, useEffect} from 'react';

import LookupForm from './LookupForm';

function PriceLookup() {

    const [product, setProduct] = useState(null)
    const [averagePrice, setPrice] = useState(null)

    return (
        <div className="price-lookup">
            <LookupForm />
        </div>
    )
}

export default PriceLookup
