const TicketRepository = require('../database/repositories/ticketRepository.js')

class TicketService {
  
  constructor() {
    this.repository = new TicketRepository()
  }

  async createTicket(ticket){
    return this.repository.create(ticket)
  }

}

module.exports = TicketService