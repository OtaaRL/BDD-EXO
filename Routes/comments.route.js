import express from "express"
import commentsController from '../Controllers/comments.controller.js'

const router = express.Router();

router.get("/", commentsController.getAll)

router.get("/:id", commentsController.getById)

router.patch("/:id", commentsController.update)

router.post("/", commentsController.insert)

router.delete("/:id", commentsController.deleteComments)


export default router;