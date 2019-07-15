const express = require('express'),
      router = express.Router(),
      Donations = require('../models/donations');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
      
router.get('/donations', async (requ, res, next) => {
    const allDonations = await Donations.getAllDonationItems();
    res.json(allDonations).status(200);
});

module.exports = router;