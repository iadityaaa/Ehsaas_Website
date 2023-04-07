const mongoose = require("mongoose");
const Event = require("./../model/eventModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const cloudinary = require("./../utils/cloudinary");
const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");
const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadPostImages = upload.fields([{ name: "image", maxCount: 1 }]);

exports.resizePostImages = catchAsync(async (req, res, next) => {
  if (!req.files) return next();
  if (!req.files.image) return next();
  console.log(req.files);
  await Promise.all(
    req.files.image.map(async (file, i) => {
      const filename = `event-${req._id}-${Date.now()}-${i + 1}.jpeg`;
      //console.log(file);
      const file1 = await sharp(file.buffer)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/img/events/${filename}`);

      //console.log(file1);
      const result = await cloudinary.uploader.upload(
        `public/img/events/${filename}`
      );
      console.log("result", result);
      req.body.image = result.secure_url;
    })
  );
  next();
});
function filterBody(object, filterObj) {
  console.log(Object.keys(object));
  Object.keys(object).forEach((el) => {
    if (!filterObj.includes(el)) {
      delete object[el];
    }
  });
  return object;
}
exports.createEvent = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const event = await Event.create({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    formLink: req.body.formLink,
  });
  return res.status(201).json({
    message: "Event Successfully added",
    status: "success",
    data: { event },
  });
});

exports.updateEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findById(req.params.id);
  if (!event) return next(new AppError("Event not found", 400));
  const filteredobj = filterBody(req.body, [
    "name",
    "description",
    "formLink",
    "image",
  ]);
  filteredobj.image = req.body.image ? req.body.image : event.image;
  const result = await Event.findOneAndUpdate(
    { _id: req.params.id },
    filteredobj,
    {
      runValidators: true,
      new: true,
      returnOriginal: false,
    }
  );
  return res.status(200).json({
    message: "Event Successfully updated",
    status: "success",
    data: { result },
  });
});

exports.deleteEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findById(req.params.id);
  if (!event) return next(new AppError("Event not found", 400));
  await Event.deleteOne({ _id: req.params.id });
  return res.status(200).json({
    message: "Event Successfully deleted",
    status: "success",
  });
});

exports.getAllEvent = catchAsync(async (req, res, next) => {
  const events = await Event.find({}).sort("date").limit(20).sort({ date: -1 });
  return res.status(200).json({
    status: "success",
    data: {
      events,
    },
  });
});
exports.getOneEvent = catchAsync(async (req, res, next) => {
  const _id = req.params.id;
  const event = await Event.find({ _id });
  if (!event) return next("No event matched with this id", 400);
  return res.status(200).json({
    status: "success",
    data: {
      event,
    },
  });
});
