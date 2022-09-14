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