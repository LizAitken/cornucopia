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

router.post('/sign-up', async (req,res) => {
  const { first_name, last_name, user_email } = req.body;

  const salt = bcrypt.genSaltSync(10),
        hash = bcrypt.hashSync(req.body.user_password, salt);

  const user = new User( null, first_name, last_name, user_email, hash);
  const response = await user.addUser();

  response.then(() => {
    res.redirect('/');
  });

  if (response.command === "INSERT" && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send(`Could not add new user with user name: '${first_name}'`).status(409);
  }
});


module.exports = router;
