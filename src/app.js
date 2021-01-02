import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import config from './config';
import routes from './routes/crmRoutes';

const {
  MONGO_URI,
  MONGO_DB_NAME,
  JWT_SECRET
} = config;

const app = express();

// body parser setup
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// JWT setup
app.use((req, res, next) => {
  // check headers
  // check authorization in headers
  // check for JWT at index 0 in array
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    // then verify the secret word
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], JWT_SECRET, (err, decode) => {
      // if err clear user
      req.user = decode;
      next();
    });
  } else {
    // Clear user data when sending request to user
    req.user = undefined;
    next();
  }
})

// DB Config
const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

// mongoose connection
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log(err));

routes(app);

// serving static files
app.use(express.static('../public'));

export default app;