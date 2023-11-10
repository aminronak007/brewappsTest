module.exports = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR !!! Internal server error",
  CREATED: (text) => `${text} has been stored successfully`,
  READ: (text) => `${text} has found successfully`,
  UPDATED: (text) => `${text} has been updated successfully`,
  DELETED: (text) => `${text} has been deleted successfully`,
  NOTFOUND: (text) => `${text} has not found.`,
  SOMETHING_WENT_WRONG: "Something went wrong",
  EXISTS: "Record already exists",
};
