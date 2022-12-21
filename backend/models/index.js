const { Sequelize } = require("sequelize");
const { initModels } = require("./init-models");

const options = {
    username: "postgres",
    password: "postgres",
    database: "ViptechProject",
    host: "localhost",
    dialect: "postgres",
    logging: false,
};

const connection = new Sequelize(options);
connection
    .authenticate()
        .then(() => console.log(`Successfully connected to "${options.database}" database!`))
        .catch((error) => console.log(`Connection to dataBase "${options.database}" error! \n`, error));

let db = initModels(connection);
db = { ...db, connection };

module.exports = db;