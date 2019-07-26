const express = require('express'),
      router = express.Router(),
      Donations = require('../models/donations');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
      
router.get('/all', async (req, res, next) => {
    const allDonations = await Donations.getNGONamesForAllItems();
    res.json(allDonations).status(200);
});

router.get('/wish-list-item-entry', async (req, res, next) => {
    const {
        title,
        price,
        quantity,
        store_name,
        donation_receiver,
        store_link
         } = req.query;
    
    console.log(req.body);
    const response = await Donations.addDonation(title, price, quantity, store_name, donation_receiver, number_purchased, store_link);
    return response; 
})

module.exports = router;