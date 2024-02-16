const express = require("express");
const ExpressError = require("./error");
const helpers = require("./helpers");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/mean", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  try {
    let intNums = helpers.arrNums(req.query);
    intNums.forEach((num) => {
      if (typeof num !== "number" || isNaN(num))
        throw new ExpressError("You can only submit numbers", 400);
    });
    let result = helpers.mean(intNums);
    return res.json(new helpers.response("mean", result));
  } catch (err) {
    return next(err);
  }
});

app.get("/median", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let intNums = helpers.arrNums(req.query);
  intNums.forEach((num) => {
    if (typeof num !== "number" || isNaN(num))
      throw new ExpressError("You can only submit numbers", 400);
  });
  let result = helpers.median(intNums);
  return res.json(new helpers.response("median", result));
});

app.get("/mode", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let intNums = helpers.arrNums(req.query);
  intNums.forEach((num) => {
    if (typeof num !== "number" || isNaN(num))
      throw new ExpressError("You can only submit numbers", 400);
  });
  let result = helpers.mode(intNums);
  return res.json(new helpers.response("mode", result));
});
//404 handler
app.use(function (req, res, next) {
  const pageNotFoundErr = new ExpressError("Page not found", 404);
  return next(pageNotFoundErr);
});
//global handler
app.use(function (err, req, res, next) {
  let status = err.status || 500;
  let msg = err.msg;

  return res.status(status).json({ error: { msg, status } });
});

app.listen(3000, function () {
  console.log("App on port 3000");
});
