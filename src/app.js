import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import routes from './routes/crmRoutes';

const {
  MONGO_URI,
  MONGO_DB_NAME
} = config;

const app = express();

// body parser setup
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

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