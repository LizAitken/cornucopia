const express = require('express'),
      router = express.Router(),
      NGO_User = require('../models/ngo_users'),
      Donations = require('../models/donations'),
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
        name,
        email,
        ein,
        address,
        description,
        type_id,
        website,
        photo } = req.body;
    
    console.log(req.body);
  
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
  
    const response = await NGO_User.addNGO(name, email, hash, ein, address, description, type_id, website, photo);
    console.log('Response : ', response);
    return response;
});
    
module.exports = router;
        