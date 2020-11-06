import React, {  useState } from 'react';
import { connect } from "react-redux";

import { fetchListing } from "../../actions/listingActions"
import SerpResults from './SerpResults';

const InputForm = function(props) {
    const [itemName, setName] = useState('')
    const handleSubmit = props.handleSubmit
    const listings = props.listings
    const averagePrice = 'average price: ' + props.averagePrice

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };

    return (
        <div className="input-field">
            <form onSubmit={ e => handleSubmit(e, itemName)}>
                <label htmlFor="first_name">Search</label>
                <input 
                    onChange={handleChange} 
                    onKeyPress={handleKeypress}
                    value={itemName} 
                    placeholder="item or listing name" 
                    id="first_name" 
                    type="text" 
                    className="validate"
                    >
                </input>
            </form>
            <h4>{Object.keys(listings).length > 0 && averagePrice}</h4>
            <SerpResults listings={listings} />
        </div>
    );
}

export default InputForm
