const express = require("express");
const router = express.Router();

const {truePrice} = require('true-price');

router.post('/search', (req, res) => {
    console.log(req.body)
    let listingName = req.body.listingName
    let listing = truePrice.fetchAveragePrice(listingName).then(response => {
        console.log('SERP for ' + listingName, response)
        return res.json({
            listings: response.listings,
            averagePrice: '$' + Math.floor(response.averagePrice)
        })
    })
})

module.exports = router;