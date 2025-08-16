import express from "express"
import { deleteBook, getAll, create, actualizar} from "./bookController.js";

const router = express.Router();

router.get("/books", getAll);
router.delete("/delete-book/:id",deleteBook);
router.post("/books/create", create);
router.put("books/update/:id", update);


export default router;