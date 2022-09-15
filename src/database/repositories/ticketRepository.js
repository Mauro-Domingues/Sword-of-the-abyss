const db = require("../index.js")

class TicketRepository {

  async create(ticketData){
    const conn = await db.connectToMySql()
    const query = "INSERT INTO ticket (title, data, type, status, description, contact) VALUES (A?, ?, ?, ?, ?, ?)"
    const ticket = await conn.query(query, [
      ticketData.title,
      ticketData.data,
      ticketData.type,
      ticketData.status,
      ticketData.description,
      ticketData.contact
    ])
    return ticket
  }
  
}

module.exports = TicketRepository

/*
ticketData.title = document.querySelector("#title").value,
ticketData.data = document.querySelector("#data").value,
ticketData.type = document.querySelector("#options").value,
ticketData.description = document.querySelector("#description").value,
ticketData.contact = document.querySelector("#email").value
*/