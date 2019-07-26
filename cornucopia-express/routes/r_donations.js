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

router.post('/wish-list-item-entry', async (req, res, next) => {
    const {
        donation_name,
        donation_cost,
        donation_photo,
        donation_amount,
        donation_store_name,
        donation_receiver,
        store_link
         } = req.query;

    const response = await Donations.addDonation(
        donation_name,
        donation_cost,
        donation_photo,
        donation_amount,
        donation_store_name,
        donation_receiver,
        store_link);
    return response; 
})

module.exports = router;