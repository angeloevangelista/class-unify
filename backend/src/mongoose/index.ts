import mongoose from 'mongoose';

import mongodbConfig from '../config/mongodb';
const { connectionString } = mongodbConfig;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`MongoDB connection successfully established 🌱`))
  .catch((err) =>
    console.log(`❌  An error occurred while connection on MongoBD: ${err}`),
  );
