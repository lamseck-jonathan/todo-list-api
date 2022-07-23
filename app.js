const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const taskRoutes = require("./routes/task")

mongoose.connect("mongodb+srv://jonathan:dewei57@cluster0.omff6.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => console.log("Connexion à mongoDB reussie !"))
.catch(() => console.log("Connexion à mongoDB echoué"))

const app = express();

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept,Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/task',taskRoutes);

module.exports = app;