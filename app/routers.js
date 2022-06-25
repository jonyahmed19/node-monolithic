const routes = require("express").Router();

routes.get("/health", (_req, res) => {
  res.status(200).json({ message: "success" });
});

routes.use("/api/v1/tickets", require("../routes/ticket"));

module.exports = routes;
