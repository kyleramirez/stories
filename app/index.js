import express from "express"
import path from "path"
import favicon from "serve-favicon"
import logger from "morgan"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import ws from "express-ws"
import { normalizePort } from "./utils"

const app = express()

ws(app)

app.get("/", (req, res)=>{
  res.send("<p>ok NOT kewl</p>")
})

// app = applyConfig(app)
// app = applyRoutes(app)

/* Set Views Engine */
app.set("views", path.join(__dirname, "../views"))
app.set("view engine", "ejs")

/* Config */
// app.use(favicon(path.join(__dirname, "../public", "favicon.ico")))
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "../public")))

const port = normalizePort(process.env.PORT || "3000")

app.set("port", port)

app.listen(port)

app.on("error", function(error) {
  if (error.syscall !== "listen") throw error;

  let bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
})

app.on("listening", function() {
  var addr = server.address();
  var bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`
})
