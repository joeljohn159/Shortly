const express = require("express");
const connectToDB = require('./connectDB.js')
const urlRoute = require('./routes/urlRoutes.js')
const bodyParser = require('body-parser')

const PORT = 5100;
const MONGO_URL = 'mongodb://localhost:27017/shorten'

const app = express();

// CORS middleware
const allowCrossDomain = (req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next()
}
// app.use(bodyParser.urlencoded({extended:false}))

app.use(allowCrossDomain);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectToDB(MONGO_URL).then(()=>console.log("Connected to DB!"));


app.use('/url', urlRoute);

app.listen(PORT, ()=>{
    console.log("EXPRESS ", PORT)
})