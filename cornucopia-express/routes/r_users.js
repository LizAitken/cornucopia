const express = require('express'),
      router = express.Router(),
      User = require('../models/users'),
      bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile/:user_id?', async (req, res, next) => {
  const userID = req.params.user_id;
  const userInfo = await User.getUserInfo(userID);
  res.json(userInfo).status(200);
});

router.get('/delete/:user_id?', async (req,res, next) => {
  const userID = req.params.user_id;
  const response = await User.deleteUser(userID);

  if (response.command === 'DELETE' && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send(`Could not delete postId: '${userID}'`).sendStatus(409);
  }
});

router.post('/user-sign-up', async (req,res) => {
  const { firstName, lastName, email } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  
  // const user = new User( null, first_name, last_name, user_email, hash);
  // console.log('user is: ', user);
  const response = await User.addUser(firstName, lastName, email, hash);
  return response;
});


module.exports = router;
