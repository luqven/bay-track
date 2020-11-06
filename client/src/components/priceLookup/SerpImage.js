import React from 'react'

function SerpImage({listing}) {
    return (
        <div className="serp-image">
            <a className="listing-link" href={listing.link}>
                <img className="listing-image" src={listing.image}></img>
            </a>      
        </div>
    )
}

export default SerpImage
