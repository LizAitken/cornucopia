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

router.get('/personal-page/:ngo_id?', async (req, res, next) => {
    const ngoID = req.params.ngo_id;
    console.log('getting to router');
    const ngoInfo = await NGO_User.getNGObyID(ngoID);
    console.log('personal page on route',ngoInfo)
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
    if(response.name != 'undefined') {
        console.log('is logged in');
        req.session.is_logged_in = true;
        req.session.ngo_id = response.ngo_id;
        req.session.ngo_name = response.ngo_name;
        req.session.ngo_email = response.ngo_email;
        req.session.ngo_address = response.ngo_address;
        req.session.ngo_website = response.ngo_website;
        req.session.ngo_description = response.ngo_description;
        response["login"] = true;
        req.session.save()
        res.json({
            data:response
        });
        console.log(data);
    } else {
        res.sendStatus(401)
        console.log('wrong pw');
    }
});

router.post('/log-in', async (req,res) => {
    const { email, password} = req.body;    
    // console.log('Login req body: ',req.body);
    console.log('getting there?');
    const NGOuser = await NGO_User.loginNGOUserByEmail(email);
    console.log('NGO user', NGOuser);

    const valid_login = bcrypt.compareSync(password, NGOuser.ngo_password)
    
    if (!!valid_login) {
        console.log('is logged in');
        req.session.is_logged_in = true;
        req.session.ngo_id = NGOuser.ngo_id;
        req.session.ngo_name = NGOuser.ngo_name;
        req.session.ngo_email = NGOuser.ngo_email;
        req.session.ngo_address = NGOuser.ngo_address;
        req.session.ngo_website = NGOuser.ngo_website;
        req.session.ngo_description = NGOuser.ngo_description;
        NGOuser["login"] = true;
        req.session.save()
        res.json({
            data: NGOuser
        });
        console.log('DATA',data);
    } else {
        res.sendStatus(401)
        console.log('wrong pw');
    }
});
    
module.exports = router;
        