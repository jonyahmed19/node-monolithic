const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }
  /**
   * create and save a new ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} return a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }
  /**
   * create multiple ticket for a user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }
  /**
   * return all available tickets
   */
  find() {
    return this.tickets;
  }
  /**
   *
   * @param {string} ticketId
   */
  findById(ticketId) {
    const ticket = this.tickets.find((ticket) => ticket.id == ticketId);

    return ticket;
  }
  /**
   * find all tickets for a given user
   * @param {string} username
   * @return {Array<Ticket>}
   */
  findByUsername(username) {
    const tickets = this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username == username
    );
    return tickets;
  }

  /**
   *
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @returns {Ticket}
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updateAt = new Date();

    return ticket;
  }
  /**
   * @param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id == ticketId);
    if (index != -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
  /**
   * find winners
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
    const winnerIndices = new Array(winnerCount);
    let index = 0;
    while (index < winnerCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);
      if (!winnerIndices.includes(winnerIndex)) {
        winnerIndices[index++] = winnerIndex;
        continue;
      }
    }

    const winners = winnerIndices.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();

module.exports = myDB;
