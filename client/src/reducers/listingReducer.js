import { LISTINGS_LOADING, SET_LISTING } from "../actions/types";

const initialState = {
    listings: {},
    loading: false,
};

export default function (state = initialState, action) {
    Object.freeze(state);

    switch (action.type) {
        case SET_LISTING:
            let newState = Object.assign({}, state.listings);

            let newListings ={}

            action.payload.listings.forEach((listing, idx) => {
                newListings[idx] = {...listing}
            })

            newState.listings = newListings
            debugger
            return newState
        case LISTINGS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    };
}
