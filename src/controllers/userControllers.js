import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from '../config';
import jwt from 'jsonwebtoken';
import {
  UserSchema
} from '../models/userModel';

const {
  JWT_SECRET
} = config;

const User = mongoose.model('User', UserSchema);

// Require User Login
export const loginRequired = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({
      message: 'Unauthorized user'
    });
  }
}

// Register a User
export const register = (req, res) => {
  // Create new user
  const newUser = new User(req.body);
  // Encrypt password
  newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
  // Save to database
  newUser.save((err, user) => {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      // Clear password when sending request to user
      user.hashPassword = undefined;
      return res.json(user);
    }
  })
}

// Login a User
export const login = (req, res) => {
  // Find user by email
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    if (err) throw err;
    // If user not found
    if (!user) {
      res.status(401).json({
        message: 'User not found'
      });
      // if user is found
    } else if (user) {
      // check if password matches hashPassword
      if (!user.comparePassword(req.body.password, user.hashPassword)) {
        // if password does NOT match hashPassword
        res.status(401).json({
          message: 'Wrong password'
        });
        // if password matches hashPassword
        // create a jwt token and sign it
      } else {
        return res.json({
          token: jwt.sign({
            email: user.email,
            username: user.username,
            _id: user.id
          }, JWT_SECRET, {
            expiresIn: 3600 // 3600 seconds = 1 hour
          })
        });
      }
    }
  })
}