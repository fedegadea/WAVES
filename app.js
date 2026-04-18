const express = require("express")
const path = require("path")
const app = express()

// Servir archivos estáticos desde la raíz del proyecto
app.use(express.static(__dirname))

app.get("/gracias", (req, res) => {
  res.sendFile(path.join(__dirname, "gracias.html"))
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(process.env.PORT || 3000, function () {
  console.log("CardCopy corriendo en puerto " + (process.env.PORT || 3000))
})
