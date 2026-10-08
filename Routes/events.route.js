import express from 'express'
import EventController from '../Controllers/events.controller.js';
const router = express.Router();

router.get('/', EventController.getAll)

router.get('/:id', EventController.getById);

router.patch('/:id', EventController.update);

router.delete('/:id', EventController.deleteEvent);

router.post('/', EventController.insert);

export default router;