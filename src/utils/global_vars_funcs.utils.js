const { success, error } = require("../handler/response.handler");
const message = require("../constants/message.constants");

const globalVarsAndFuncs = () => {
  global.successHandler = success;
  global.errorHandler = error;
  global.message = message;
};

module.exports = globalVarsAndFuncs;
