const { Router } = require("express");
const { EventController } = require("../controllers");
const { validateJWT, checkValidation } = require("../middlewares");
const { createEventValidation, updateEventValidation } = require("../validations/events");

const eventRouter = Router();

eventRouter.use(validateJWT);

eventRouter.get('/', EventController.getEvents);
eventRouter.post('/', checkValidation(createEventValidation), EventController.createEvent);
eventRouter.put('/:id',  checkValidation(updateEventValidation), EventController.updateEvent);
eventRouter.delete('/:id', EventController.deleteEvent);

module.exports = eventRouter;