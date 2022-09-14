const mysql = require("mysql2/promise")

const connectToMySql = async () => {

    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection
    const config = {
        host: "http://localhost/phpmyadmin/index.php?lang=pt",
        user: "root",
        password: "",
        database: "report_suggestion_db"
        // Dados formados ao criar um DB
    }

    const connection = await mysql.createConnection(config)
    console.log("Conexão realizada com sucesso")
    global.connection = connection
}

connectToMySql()

module.exports = {connectToMySql}