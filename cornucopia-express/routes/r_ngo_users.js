const express = require('express'),
      router = express.Router(),
      Users = require('../models/users'),
      bcrypt = require('bcryptjs');