const TicketService = require("../services/ticketService")

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