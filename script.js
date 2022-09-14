// form e botão

const form = document.querySelector("#form")
const sendButton = document.querySelector("#send")
const abortButton = document.querySelector("#abort")

// inputs

const title = document.querySelector("#title").value
const data = document.querySelector("#data").value
const options = document.querySelector("#options").value
const description = document.querySelector("#description").value
const email = document.querySelector("#email").value

// Criar um eventListener para um PUT no db usando o valor dos inputs
// Criar um fetch para um GET no db e um acumulator para inserir linhas na tabela do Admin
// Criar uma forma de UPDATE no status e de DELETE para a página do Admin

/* Comando para criar o DB completo
CREATE TABLE `report_suggestion_db`.`ticket` (`id` INT NOT NULL AUTO_INCREMENT , `title` CHAR(100) NOT NULL , `data` DATETIME NOT NULL , `type` CHAR(100) NOT NULL , `status` CHAR(100) NOT NULL DEFAULT 'Pendente' , `description` TEXT NOT NULL , `contact` CHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
*/

//const ticket = TicketRepository()

/*export const ticket = [
    ticketData.title = title,
    ticketData.data = data,
    ticketData.type = options,
    ticketData.description = description,
    ticketData.contact = email
]

sendButton.addEventListener("click", () => {
    console.log(ticket)
})*/

/*sendButton.post = {
    "title": `${title}`,
    "data": `${data}`,
    "type": `${options}`,
    "description": `${description}`,
    "contact": `${email}`
}*/

const getTicketUrl = (id) => `https://127.0.0.1/${id}`
const fetchTicket = () => {
    const ticketPromises = []
    for (let i = 1; i <= ticket.length; i++) {
        ticketPromises.push(
            fetch(getTicketUrl(i)).then((response) => response.json())
        )
    }
    Promise.all(ticketPromises).then((tickets) => {
        const listTickets = tickets.reduce((accumulator, ticket) => { //filter
            const id = ticket.map((ticket) => ticket.id)
            const title = ticket.map((ticket) => ticket.title)
            const data = ticket.map((ticket) => ticket.data)
            const type = ticket.map((ticket) => ticket.type)
            const status = ticket.map((ticket) => ticket.status)
            const description = ticket.map((ticket) => ticket.description)
            const contact = ticket.map((ticket) => ticket.contact)
            accumulator += `
                            <tr>
                            <td>${id}</td>
                            <td>${title}</td>
                            <td>${data}</td>
                            <td>${type}</td>
                            <td>${status}</td>
                            <td>${description}</td>
                            <td>${contact}</td>
                            </tr>`
            return accumulator
        },
        "")
        const tbody = document.querySelector("tbody")
        tbody.innerHTML = listTickets
    })
}
fetchTicket()