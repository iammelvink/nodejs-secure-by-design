import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import {
  UserSchema
} from '../models/userModel';

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