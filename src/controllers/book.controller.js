const BookModel = require("../models/book.model");

class BookController {
  constructor() {}

  async create(req, res) {
    try {
      let result = await BookModel.create(req.body);

      if (!result) {
        return errorHandler(res, 202, message.SOMETHING_WENT_WRONG, {});
      }

      if (result.title === req.body.title) {
        return errorHandler(res, 202, message.EXISTS, {});
      }

      return successHandler(res, 200, message.SUCCESS, result);
    } catch (error) {
      console.log(error.message);
      errorHandler(res, 500, message.ERROR, error);
    }
  }

  async read(req, res) {
    try {
      let result = await BookModel.read();

      if (!result) {
        return errorHandler(res, 202, message.SOMETHING_WENT_WRONG, {});
      }

      return successHandler(res, 200, message.SUCCESS, result);
    } catch (error) {
      console.log(error.message);
      errorHandler(res, 500, message.ERROR, error);
    }
  }

  async update(req, res) {
    try {
      let { id } = req.params;
      let result = await BookModel.update(id, req.body);

      if (!result) {
        return errorHandler(res, 202, message.SOMETHING_WENT_WRONG, {});
      }

      return successHandler(res, 200, message.UPDATED("Data"), result);
    } catch (error) {
      console.log(error.message);
      errorHandler(res, 500, message.ERROR, error);
    }
  }

  async delete(req, res) {
    try {
      let { id } = req.params;
      let result = await BookModel.delete(id);

      if (!result) {
        return errorHandler(res, 202, message.NOTFOUND("The record"), {});
      }

      return successHandler(res, 200, message.DELETED("Data"), result);
    } catch (error) {
      console.log(error.message);
      errorHandler(res, 500, message.ERROR, error);
    }
  }

  async example(req, res) {
    try {
      let result = await BookModel.create(req.body);

      if (!result) {
        return errorHandler(res, 202, message.CREDENTIALS_WRONG, {});
      }

      return successHandler(res, 200, message.SUCCESS("Login"), result);
    } catch (error) {
      console.log(error);
      errorHandler(res, 500, message.ERROR, error);
    }
  }
}

module.exports = new BookController();
