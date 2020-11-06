import React, {  useState } from 'react';
import { connect } from "react-redux";

import { fetchListing } from "../../actions/listingActions"


const InputForm = function(props) {
    const [itemName, setName] = useState('')
    const handleSubmit = props.handleSubmit
    const listings = props.listings
    const averagePrice = props.averagePrice

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
            <h3>{averagePrice}</h3>
            <ul style={{overflow: 'auto', maxHeight: 500}}>
                {Object.keys(listings).length > 0 && Object.keys(listings).map((id) => {
                    return (
                        <li key={id}>
                            <div className="listing-image">
                                <img src={listings[id].image}></img>
                            </div>
                            <a href={listings[id].link}>{'[$' + listings[id].price + '] ' + listings[id].title}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        list: state.listings.list,
        averagePrice: state.listings.averagePrice,
        loading: state.listings.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchListing: (name) => dispatch(fetchListing(name))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(InputForm)