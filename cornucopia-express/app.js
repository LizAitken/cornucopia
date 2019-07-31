const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const NGO_User = require('./models/ngo_users');
const bcrypt = require('bcryptjs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/r_users');
const donationsRouter = require('./routes/r_donations');
const ngoUsersRouter = require('./routes/r_ngo_users');

const app = express();

const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));
app.use(session({
    store: new FileStore(),
    secret:'secret'
}))
// app.use(session({
//     store: new FileStore(),
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: true,
//     is_logged_in: false
// }));
app.post('/non-profit/log-in', async (req,res) => {
    const { email, password} = req.body;    
    console.log('Login req body: ',req.body);

    const NGOuser = await NGO_User.loginNGOUserByEmail(email);
    console.log('NGO user', NGOuser);
    const valid_login = bcrypt.compareSync(password, NGOuser.ngo_password)
    
    // if (!!valid_login) {
        // console.log('is logged in');
        // req.session.is_logged_in = true;
        // req.session.save()
        // res.json({
        //     data:NGOuser
        // });
    // } else {
    //     res.sendStatus(401)
    // }
});
// app.use('*', function(req, res, next) {
//     if(!!req.session.is_logged_in) {
//         next();
//     } else {
//         res.sendStatus(401);  
//     }
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/donations', donationsRouter);
app.use('/non-profit', ngoUsersRouter);

module.exports = app;
