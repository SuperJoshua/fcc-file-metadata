"use strict"

const cors = require("cors")
const express = require("express")
const multer = require("multer")

const app = express()
const upload = multer()

app.use(cors())
app.use("/public", express.static(`${process.cwd()}/public`))

app.get("/", function (req, res) {
   res.sendFile(`${process.cwd()}/views/index.html`)
})

// solution

// Wow, this one was stupid-easy.

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
   const name = req.file.originalname
   const type = req.file.mimetype
   const size = req.file.size
   res.json({name, type, size})
})

const app_port = 3000
app.listen(app_port, function () {
   console.log(`This app is listening on port ${app_port}`)
})
