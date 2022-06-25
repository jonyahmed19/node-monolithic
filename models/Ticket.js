const shortId = require("shortid");

class Ticket {
  /**
   * constructor function
   * @param {string} username
   * @param {number} price
   */
  constructor(username, price) {
    this.id = shortId.generate();
    this.username = username;
    this.price = price;
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}

module.exports = Ticket;
