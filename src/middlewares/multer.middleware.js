const multer = require("multer");
const fs = require("fs");
const dirName = process.env.UPLOAD_DIR;

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "file") {
      if (!fs.existsSync(`${dirName}/media`)) {
        fs.mkdirSync(`${dirName}/media`);
      }

      // ---- Checking if the a directory exists or not and if not exist create a directory ----
      if (!fs.existsSync(`${dirName}/media/images`)) {
        fs.mkdirSync(`${dirName}/media/images`);
      } else if (!fs.existsSync(`${dirName}/media/pdfs`)) {
        fs.mkdirSync(`${dirName}/media/pdfs`);
      } else if (!fs.existsSync(`${dirName}/media/csv`)) {
        fs.mkdirSync(`${dirName}/media/csv`);
      } else if (!fs.existsSync(`${dirName}/media/word`)) {
        fs.mkdirSync(`${dirName}/media/word`);
      }

      // ---- Saving different files like image, pdf, csv, etc. into different folders ----
      let folderName = "";
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg" ||
        file.mimetype == "image/gif" ||
        file.mimetype == "image/webp"
      ) {
        folderName = "images";
      }

      if (file.mimetype == "application/pdf") {
        folderName = "pdfs";
      }

      if (file.mimetype == "text/csv") {
        folderName = "csv";
      }

      if (
        file.mimetype == "application/msword" ||
        file.mimetype ==
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        folderName = "word";
      }
      cb(null, `${dirName}/media/${folderName}`);
    } else {
      let path = "";
      return path;
    }
  },

  filename: (req, file, cb) => {
    // let fileExt = file.originalname.split(".").pop();
    // cb(
    //   null,
    //   Date.now() + "_" + `${file.fieldname}.${fileExt}`.split(" ").join("_")
    // );

    cb(null, file.originalname);
  },
});

exports.upload = multer({
  storage: multerStorage,
  fileFilter: (req, file, cb) => {
    // ---- Checking and validating the file extension ----
    if (file.fieldname === "file") {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg" ||
        file.mimetype == "image/gif" ||
        file.mimetype == "image/webp" ||
        file.mimetype == "application/pdf" ||
        file.mimetype == "application/msword" ||
        file.mimetype ==
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        file.mimetype == "text/csv"
      ) {
        cb(null, true);
      } else {
        return cb(null, false);
      }
    }
  },
});
