const router = require("express").Router();
const db = require("../db/db");

router
  .route("/t/:ticketId")
  .get((req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = db.findById(ticketId);
    res.status(200).json(ticket);
  })
  .patch((req, res) => {
    const ticketId = req.param.ticketId;
    const updatedTicket = db.updateById(ticketId, req.body);
    res.status(200).json({ message: "Updated Succesfully", updatedTicket });
  })
  .delete((req, res) => {
    const ticketId = req.param.ticketId;
    db.deleteById(ticketId);
    res.status(203).send();
  });

router
  .route("/u/:username")
  .get((req, res) => {
    const username = req.param.username;
    const tickets = db.findByUsername(username);
    res.status(200).json(tickets);
  })
  .patch((req, res) => {})
  .delete((req, res) => {});

router.post("/sell", (req, res) => {
  const { usename, price } = res.body;
  const ticket = db.create(username, price);
  res.status(201).json({ message: "Ticket created successfully", ticket });
});
router.post("/bulk", () => {
  const { usename, price, quantity } = res.body;
  const tickets = db.bulkCreate(username, price, quantity);
  res.status(201).json({ message: "Ticket created successfully", tickets });
});
router.get("/draw", (req, res) => {
  const winnerCount = req.query.wc ?? 3;
  const winners = db.draw(winnerCount);

  res.status(200).json(winners);
});
router.get("", () => {
  const tickets = db.find();
  res.status(200).json(tickets);
});

module.exports = router;
