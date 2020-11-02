import React from 'react';
import { connect } from "react-redux";

import { fetchListing } from "../../actions/listingActions"


const InputForm = function(props) {
    const [itemName, setName] = React.useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(itemName)
        props.fetchListing(itemName)
        setName('')
    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };

    console.log(itemName)

    return (
        <div class="input-field">
            <form onSubmit={ e => handleSubmit(e)}>
                <label htmlFor="first_name">Search</label>
                <input 
                    onChange={handleChange} 
                    onKeyPress={handleKeypress}
                    value={itemName} 
                    placeholder="item or listing name" 
                    id="first_name" 
                    type="text" 
                    class="validate"
                    >
                </input>
            </form>
            <ul>
                {Object.keys(props.listings).map((id) => {
                    return (
                        <li>{
                            '[' + 
                            props.listings[id].price +
                            '] ' +
                            props.listings[id].title
                        }</li>
                        )
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    debugger
    return {
        listings: {...state.listings}
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchListing: (name) => dispatch(fetchListing(name))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(InputForm)