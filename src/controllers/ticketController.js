const TicketService = require("../services/ticketService") // Recebe os comandos consultar/criar/atualizar/deletar

// Consultar todos

exports.get = async (req, res, next) => {
  try{
  const payload = await new TicketService().getAllTickets()
  res.status(200).send(payload)
  }catch(error){
  res.status(400).send({
    message: error.message
  })
  }
}

// Consultar pela TAG

exports.getByTag = async (req, res, next) => {
  try{
  const payload = await new TicketService().getTicketByTag(req.params.type)
  res.status(200).send(payload)
  }catch(error){
  res.status(400).send({
    message: error.message
  })
  }
}

// Criar * usar na página cliente

exports.post = async (req, res, next) => {
  try{
  const payload = await new TicketService().createTicket(req.body)
  res.status(201).send(payload)
  }catch(error){
    res.status(400).send({
      message: error.message
    })
  }
}

// Atualizar

exports.put = async (req, res, next) => {
  try{
    const id = req.params.id
    const body = req.body
    const oldTicket = await new TicketService().getTicketById(id)

    if(!oldTicket || oldTicket.length === 0)
      throw new Error(`Ticket número ${id} não foi encontrado`)

    const payload = await new TicketService().updateTicket(id, body)
  
    res.status(200).send(payload)
  }catch(error){
    res.status(404).send({
      message: error.message
    })
  }
}

// Deletar

exports.delete = async (req, res, next) => {
  try{
    const id =req.params.id
    const oldTicket = await new TicketService().getTicketById(id)

    if(!oldTicket || oldTicket.length === 0){
      throw new Error(`O ticket número ${id} não existe`)
    }
    const payload = await new TicketService().deleteTicket(id)
  
    res.status(204).send(payload)
  }catch(error){
    res.status(404).send({
      message: error.message
    })
  }
}