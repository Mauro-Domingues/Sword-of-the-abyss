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