const db = require("../index.js")

class TicketRepository {
  
  // Consulta todos os tickets do DB

  async findAll() {
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM ticket"
    const tickets = await conn.query(query)
    return tickets
  }

  // Consulta o ticket especificado pela tag do DB

  async findByTag(type){
    const conn = await db.connectToMySql()
    const query = "SELECT * FROM ticket WHERE type = ?"
    const [ticket] = await conn.query(query, [type])
    return ticket
  }

  // Cria um ticket no DB
  
  async create(ticketData){
    const conn = await db.connectToMySql()
    const query = "INSERT INTO ticket(title, data, type, description, contact) VALUES(?, ?, ?, ?, ?)"
    const ticket = await conn.query(query, [
      ticketData.title,
      ticketData.data,
      ticketData.type,
      ticketData.description,
      ticketData.contact
    ])
    return ticket
  }

  // Atualiza o ticket especificado pelo id do DB

  async update(id, ticketData){
    const conn = await db.connectToMySql()
    const query = "UPDATE ticket SET status = ? WHERE id = ?"
    const ticket = await conn.query(query, [
      ticketData.status,
      id
    ])
    return ticket
  }

  // Deleta um ticket no DB

  async delete(id){
    const conn = await db.connectToMySql();
    const query = "DELETE FROM ticket WHERE id = ?";
    const ticket = await conn.query(query, [id]);
  }

}

module.exports = TicketRepository;