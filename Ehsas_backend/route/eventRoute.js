const express = require("express");
const router = express.Router();
const authController = require("./../controller/authController");
const eventController = require("./../controller/eventController");
router.route("/").get(eventController.getAllEvent);
router.use(authController.checkJWT);
router
  .route("/")
  .post(
    eventController.uploadPostImages,
    eventController.resizePostImages,
    eventController.createEvent
  );
router
  .route("/:id")
  .get(eventController.getOneEvent)
  .patch(
    eventController.uploadPostImages,
    eventController.resizePostImages,
    eventController.updateEvent
  )
  .delete(eventController.deleteEvent);
module.exports = router;
