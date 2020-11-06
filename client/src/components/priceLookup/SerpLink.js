import React from 'react'

function SerpLink({listing}) {
    return (
        <div>
            <a className="listing-link" href={listing.link}>
                {listing.title + ' - sold for $' + listing.price}
            </a>
        </div>
    )
}

export default SerpLink
