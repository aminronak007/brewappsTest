const mongoose = require("mongoose");
const vars = require("../utils/vars.utils");

const dbConnection = () => {
  mongoose.set("strictQuery", true);
  return new Promise((resolve, reject) => {
    mongoose
      .connect(vars.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => {
        resolve(res);
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        reject(err);
        console.log("Unable to connect to the database", err);
      });
  });
};

module.exports = dbConnection;
