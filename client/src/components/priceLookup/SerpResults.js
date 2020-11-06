import React from 'react'
import SerpImage from './SerpImage';
import SerpLink from './SerpLink';

export default function SerpResults({listings}) {

    let results;

    if(Object.keys(listings).length > 0) {
        results = Object.keys(listings).map((id) => {
            let listing = listings[id];
            return (
                <li className="serp-listing" key={id}>
                    <SerpImage listing={listing} />
                    <SerpLink listing={listing} />
                </li>
            )
        })
    } else { results = [] }

    return (
        <div className="srp-results">
            <ul style={{ overflow: 'auto', maxHeight: 500 }}>
                {results}
            </ul>
        </div>
    )
}
