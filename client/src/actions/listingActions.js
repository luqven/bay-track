import axios from "axios";

import { GET_ERRORS, SET_LISTING, LISTINGS_LOADING } from "./types";


//  fetch listing
export const fetchListing =  (listingName) => dispatch => {
    console.log('fetching listings for... ' + listingName)
    return axios
        .post('/api/listings/search', {listingName: listingName})
        .then(res => {
            console.log(res.data)
            dispatch({
                type: SET_LISTING,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}