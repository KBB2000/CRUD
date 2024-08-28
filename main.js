const express = require("express")
const app = express()
const routes = require("./routes/routes")
const path = require("path")
const connestDb = require("./connectDb/connectDb")
const bodyParser =require("body-parser")

//connect mongoo db
connestDb()

//body-parser

app.use(bodyParser.urlencoded({extended:true}))

//static file setup
app.use(express.static(path.join(process.cwd(), "public")))

//ejs setup
app.set("view engine", "ejs")
app.set("views", __dirname + "/views");

//routes
app.use("/", routes)


app.listen(3004)