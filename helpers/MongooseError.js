const MongooseError = (error, data, next) => {
  error.status = 400;
  next();
};

export default MongooseError;
