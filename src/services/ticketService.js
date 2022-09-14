const TicketRepository = require('../database/repositories/ticketRepository.js')

class TicketService { // Cria e exporta os comandos consultar/criar/atualizar/deletar
  
  constructor() {
    this.repository = new TicketRepository()
  }
  
  async getAllTickets(){
    return this.repository.findAll() // Consultar
  }

  async getTicketByTag(type){
    return this.repository.findByTag(type) // Consultar pela tag
  }

  async createTicket(ticket){
    return this.repository.create(ticket) // Criar
  }

  async updateTicket(id, ticket){
    return this.repository.update(id, ticket) // Atualizar
  }

  async deleteTicket(id){
    return this.repository.delete(id) // Deletar
  }

}

module.exports = TicketService