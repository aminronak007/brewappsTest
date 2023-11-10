const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
    },
  },
  { timestamps: true }
);
let Book = mongoose.model("Books", BookSchema);

class BookModel {
  constructor() {}
  async create(input) {
    try {
      const checkExists = await Book.findOne({ title: input.title }).lean();

      if (checkExists) {
        return checkExists;
      }
      const results = await Book.create(input);

      if (results) {
        return true;
      }

      return false;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  }

  async read() {
    try {
      const results = await Book.find().lean();

      if (results.length > 0) {
        return results;
      }

      return false;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  }

  async update(id, input) {
    try {
      const updateUser = await Book.findOneAndUpdate({ _id: id }, input);

      if (updateUser) {
        return true;
      }

      return false;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  }

  async delete(id) {
    try {
      const checkExists = await Book.findOne({ _id: id }).lean();

      if (!checkExists) {
        return false;
      }

      const deleteUser = await Book.deleteOne({ _id: id });

      if (deleteUser) {
        return true;
      }

      return false;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  }
}

module.exports = new BookModel();
