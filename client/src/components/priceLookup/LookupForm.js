import React from 'react';
import { connect } from "react-redux";

import { fetchListing } from "../../actions/listingActions"


const InputForm = function(props) {
    const [itemName, setName] = React.useState('');
    const [listings, setListings] = React.useState(props.list)
    const [averagePrice, setPrice] = React.useState(props.averagePrice)

    React.useEffect(() => {
        setListings(props.list)
        setPrice(props.averagePrice)
    }, [props])

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

    console.log(props)

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
            <h3>{averagePrice}</h3>
            <ul style={{overflow: 'auto', maxHeight: 500}}>
                {Object.keys(listings).length > 0 && Object.keys(listings).map((id) => {
                    return (
                        <li>
                            <div dangerouslySetInnerHTML={ {__html: listings[id].image} }>
                            </div>
                            <a href={listings[id].link}>{'[' + listings[id].price + '] ' + listings[id].title}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    // debugger
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