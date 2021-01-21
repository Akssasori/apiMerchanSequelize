const express = require ('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require("./app/models");
// db.sequelize.sync();
db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db.");
});

var corsOptions = {
    origin: "http://localhost:8080"
};

app.get("/",(req,res)=>{
    res.json({message: "Bem vindo a aplicação, criador Lucas Diniz"})
})

require("./app/routes/tutorial.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server rodando na porta ${PORT}`);
});

// app.listen(4321,(req,res)=>{
//     if(!err){
//         console.log('Servidor aberto na porta 4321')
//     }else{
//         console.log('Erro ao abrir o servidor ', err)
//     }
// })
