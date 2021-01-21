module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "coti",
    DB: "testdb",
    dialect: "mysql",
    pool:{ // poll é opcional
        max: 5, // maximo de numero de conexao 
        min: 0, // minimun de numero de conexao
        acquire: 30000, // maximo de milisegundos que ira tentar a conecxao antes de dar erro
        idle: 10000
    }
    
};