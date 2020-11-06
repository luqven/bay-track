import { connect } from "react-redux"

import PriceLookup from './PriceLookup'
import { fetchListing } from "../../actions/listingActions"

const mapStateToProps = (state) => {
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


export default connect(mapStateToProps, mapDispatchToProps)(PriceLookup)