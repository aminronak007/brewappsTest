const router = require("express").Router();
const BookController = require("../controllers/book.controller");

router.get("/books/get", BookController.read);
router.post("/books/create", BookController.create);
router.put("/books/update/:id", BookController.update);
router.delete("/books/delete/:id", BookController.delete);

module.exports = router;
