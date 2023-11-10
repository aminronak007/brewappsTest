require("dotenv").config();

const vars = {
  port: process.env.PORT || 8000,
  frontUrl: process.env.FRONT_URL,
  nodeEnv: process.env.NODE_ENV || "development",
  mongoUrl: process.env.MONGO_URL,
};

module.exports = vars;
