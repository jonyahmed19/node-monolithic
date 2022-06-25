const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }
  /**
   * create and save a new ticket
   * @param {string} username
   * @param {number} price
   */
  create(username, price) {
    const ticket = new Ticket();
  }
  bulkCreate() {}
  find() {}
  findById() {}
  updateById() {}
  deleteById() {}
  draw() {}
}

const myDB = new MyDB();

module.exports = myDB;
