const express = require('express'),
      router = express.Router(),
      Donations = require('../models/donations');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
      
router.get('/all', async (req, res, next) => {
    console.log('getting here');
    const allDonations = await Donations.getNGONamesForAllItems();
    res.json(allDonations).status(200);
});

router.get('/all/type/:type_id?', async (req, res, next) => {
    const typeID = req.params.type_id;
    // console.log("typeID", typeID);
    const sortedDonations = await Donations.getItemsByTypeName(typeID);
    res.json(sortedDonations).status(200);
});

router.post('/wish-list-item-entry', async (req, res, next) => {
    const {
        donation_name,
        donation_cost,
        donation_photo,
        donation_amount,
        number_purchased,
        donation_store_name,
        donation_receiver,
        store_link
         } = req.query;

    const response = await Donations.addDonation(
        donation_name,
        donation_cost,
        donation_photo,
        donation_amount,
        number_purchased,
        donation_store_name,
        donation_receiver,
        store_link);
    return response; 
})

router.post('/add-donated-item', async (req, res) => {
    const {
        donation_id,
        number_purchased
    } = req.body;

    const response = await Donations.updateDonatedAmountNumbers(
        donation_id,
        number_purchased);
    return response;
})

module.exports = router;