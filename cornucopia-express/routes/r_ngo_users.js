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
    const {
        name,
        email,
        } = req.body;    
    console.log('Login req body: ',req.body);
  
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const response = await NGO_User.loginUserByEmail(email);

    if (!!valid_login) {
        req.session.is_logged_in = true;
        req.session.user_id = user.id
        req.session.first_name = user.first_name;
        req.session.last_name = user.last_name;
        res.redirect('/');
    } else {
        res.sendStatus(401)

    return response;
});
    
module.exports = router;
        