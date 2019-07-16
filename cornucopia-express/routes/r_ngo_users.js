const express = require('express'),
      router = express.Router(),
      NGO_User = require('../models/ngo_users'),
      Donations = require('../models/donations')
      bcrypt = require('bcryptjs');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
  
router.get('/profile/:ngo_id?', async (req, res, next) => {
    const ngoID = req.params.ngo_id;
    const [ngoInfo, donationInfo] = await Promise.all([NGO_User.getNGObyID(ngoID), Donations.getAllDonationsByNGOid(ngoID)]);
    console.log("ngo Info and donation info: ", ngoInfo, donationInfo);
    res.json([ngoInfo, donationInfo]).status(200);
});
  
router.post('/sign-up', async (req,res) => {
    const {
        ngo_name,
        ngo_email,
        ngo_ein,
        ngo_address,
        ngo_phone,
        ngo_description,
        ngo_website,
        ngo_photo } = req.body;
  
    const salt = bcrypt.genSaltSync(10),
          hash = bcrypt.hashSync(req.body.ngo_password, salt);
  
    const ngo = new NGO_User(
        null,
        ngo_name,
        ngo_email,
        hash,
        ngo_ein,
        ngo_address,
        ngo_phone,
        ngo_description,
        null,
        ngo_website,
        ngo_photo
        );
    const response = await ngo.addNGO();
  
    response.then(() => {
      res.redirect('/');
    });
  
    if (response.command === "INSERT" && response.rowCount >= 1) {
      res.sendStatus(200);
    } else {
      res.send(`Could not add new user with ngo name: '${ngo_name}'`).status(409);
    }
});
    
module.exports = router;
        