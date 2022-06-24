const routes = require("express").Router();

routes.get("/health", (_req, res) => {
  throw new Error("error");
  res.status(200).json({ message: "success" });
});

module.exports = routes;
