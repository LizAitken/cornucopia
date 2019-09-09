const express = require('express'),
      router = express.Router(),
      Donations = require('../models/donations');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
  
router.get('/items/:ngo_id?', async (req, res, next) => {
    const ngoID = req.params.ngo_id;
    const ngoInfo = await Donations.getAllDonationsByNGOid(ngoID);
    res.json(ngoInfo).status(200);
});

router.get('/all', async (req, res, next) => {
    const allDonations = await Donations.getNGONamesForAllItems();
    res.json(allDonations).status(200);
});

router.get('/all/type/:type_id?', async (req, res, next) => {
    const typeID = req.params.type_id;
    const sortedDonations = await Donations.getItemsByTypeName(typeID);
    res.json(sortedDonations).status(200);
});

router.post('/delete/:item_id?', async (req, res, next) => {
    console.log("getting to post!");
    const item_id = req.params.item_id;
    console.log("deleting this item id", item_id);
    const response = await Donations.deleteDonationById(item_id);
    return response;  
})

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