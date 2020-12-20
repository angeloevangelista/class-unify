const mongodbConfig = {
  username: process.env.MONGODB_USERNAME,
  password: process.env.MONGODB_PASSWORD,
  host: process.env.MONGODB_HOST,
  port: process.env.MONGODB_PORT,
  database: process.env.MONGODB_DATABASE,
};

const connectionString =
  process.env.NODE_ENV === 'development'
    ? 'mongodb://127.0.0.1:27017/class-unify-db'
    : `mongodb+srv://${mongodbConfig.username}:${mongodbConfig.password}@${mongodbConfig.host}/${mongodbConfig.database}`;

export default {
  ...mongodbConfig,
  connectionString,
};
