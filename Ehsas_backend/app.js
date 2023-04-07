const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const userRouter = require("./route/userRoute");
const eventRouter = require("./route/eventRoute");
const globalErrorHandler = require("./controller/errorController");
const AppError = require("./utils/appError");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/events", eventRouter);

app.use(express.static("build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);
module.exports = app;
