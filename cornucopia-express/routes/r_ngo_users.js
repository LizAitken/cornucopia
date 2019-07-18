const express = require('express'),
      router = express.Router(),
      NGO_User = require('../models/ngo_users'),
      bcrypt = require('bcryptjs');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
  
router.get('/profile/:ngo_id?', async (req, res, next) => {
    const ngoID = req.params.ngo_id;
    const ngoInfo = await NGO_User.getNGObyID(ngoID);
    res.json(ngoInfo).status(200);
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
    return response;
});

router.post('/login', async (req,res) => {
    const { ngo_email, ngo_password} = req.body;    
    console.log('Login req body: ',req.body);

    const NGOuser = await NGO_User.loginNGOUserByEmail(ngo_email);
    const valid_login = bcrypt.compareSync(ngo_password, NGOuser.ngo_password)
    
    if (!!valid_login) {
        req.session.is_logged_in = true;
    } else {
        res.sendStatus(401)
    }
});
    
module.exports = router;
        