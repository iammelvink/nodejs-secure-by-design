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