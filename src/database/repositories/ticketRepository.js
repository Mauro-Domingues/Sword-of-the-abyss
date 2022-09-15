const db = require("../index.js")

class TicketRepository {

  async create(ticketData){
    const conn = await db.connectToMySql()
    const query = "INSERT INTO ticket (title, data, type, description, contact) VALUES (?, ?, ?, ?, ?)"
    const ticket = await conn.query(query, [
      ticketData.title,
      ticketData.data,
      ticketData.type,
      ticketData.description,
      ticketData.contact
    ])
    return ticket
  }
  
}

module.exports = TicketRepository