const { EventModel } = require("../models");

class EventController {
  static async getEvents(req, res) {
    try {
      const events = await EventModel.find().populate("user", "name");
      res.json({
        ok: true,
        events,
      });
    } catch (error) {
      res.status(error.status || 500).json({
        ok: false,
        error,
      });
    }
  }

  static async createEvent(req, res) {
    try {
      const user = req.uid;
      const event = new EventModel(req.body);

      event.user = user;

      const eventSaved = await event.save();

      res.json({
        ok: true,
        eventSaved,
      });
    } catch (error) {
      res.status(error.status || 500).json({
        ok: false,
        error,
      });
    }
  }

  static async updateEvent(req, res) {
    try {
      const uid = req.uid;
      const eventId = req.params.id;

      const event = await EventModel.findById(eventId);

      if (!event) {
        throw { status: 404, message: "Evento no existe con este id" };
      }

      if (event.user.toString() !== uid) {
        throw { status: 401, message: "Operación no permitida" };
      }

      const newEvent = {
        ...req.body,
        user: uid,
      };

      const eventUpdated = await EventModel.findByIdAndUpdate(
        eventId,
        newEvent,
        { new: true }
      );

      res.json({
        ok: true,
        event: eventUpdated,
      });
    } catch (error) {
      if (error.name === "CastError") {
        return res.status(401).json({
          ok: false,
          error: {
            status: 401,
            message: "El evento no existe con este id",
          },
        });
      }

      res.status(error.status || 500).json({
        ok: false,
        error,
      });
    }
  }

  static async deleteEvent(req, res) {
    try {
      const uid = req.uid;
      const eventId = req.params.id;

      const event = await EventModel.findById(eventId);

      if (!event) {
        throw { status: 404, message: "Evento no existe con este id" };
      }

      if (event.user.toString() !== uid) {
        throw { status: 401, message: "Operación no permitida" };
      }

      await EventModel.findByIdAndDelete(eventId);

      res.json({ ok: true });
    } catch (error) {
      if (error.name === "CastError") {
        return res.status(401).json({
          ok: false,
          error: {
            status: 401,
            message: "El evento no existe con este id",
          },
        });
      }

      res.status(error.status || 500).json({
        ok: false,
        error,
      });
    }
  }
}

module.exports = EventController;