import express from "express"
import participantsController from '../Controllers/participants.controller.js'

const router = express.Router();

router.get("/", participantsController.getAll)

router.get('/user/:userID', participantsController.getByUserId);

router.get('/event/:eventID', participantsController.getByEventId);

router.post("/", participantsController.insert)

router.delete("/:userID/:eventID", participantsController.deleteParticipant)

export default router;