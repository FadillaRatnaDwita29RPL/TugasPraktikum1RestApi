const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()              //deklarasi variabel express
const port = 8080                  //deklarasi port
 
app.use(bodyParser.urlencoded({extended:false}))
 
app.get('/', (req, res) => {       // endpoint '/'
    res.send("Hello Selamat datang di Konversi Bilangan!")  
})

//Desimal
app.post("/decimal", (req,res) => {
    let bil = Number(req.body.bil)
    
    let result = {
        biner : bil.toString(2),
        octal : bil.toString(8),
        hexadecimal : bil.toString(16)
    }
    res.send({
        message: "Berhasil melakukan konversi bilangan",
        data: {
            decimal : bil,
            result
        }
    })
}) 

//Biner
app.post("/biner", (req,res) => {
    let bil = Number(req.body.bil)
    let dcml = parseInt(bil, 2)

    let result = {
        decimal : dcml,
        octal : dcml.toString(8),
        hexadecimal : dcml.toString(16)
    }
   
    res.send({
        message: "Berhasil melakukan konversi bilangan",
        data: {
            biner : bil,
            result
        }
    })
}) 

//octal
app.post("/octal", (req,res) => {
    let bil = Number(req.body.bil)
    let dcml = parseInt(bil, 8)

    let result = {
        decimal : dcml,
        biner : dcml.toString(2),
        hexadecimal : dcml.toString(16)
    }
    res.send({
        message: "Berhasil melakukan konversi bilangan",
        data: {
            octal : bil,
            result
        }
    })
}) 

//Hexadecimal
app.post("/hexadecimal", (req,res) => {
    let bil = req.body.bil
    let dcml = parseInt(bil, 16)

    let result = {
        decimal : dcml,
        biner : dcml.toString(2),
        octal : dcml.toString(8)
    }
    res.send({
        message: "Berhasil melakukan konversi bilangan",
        data: {
            hexadecimal : bil,
            result
        }
    })
})

app.listen(port, () => {            
    console.log(`Server di port ${port}`)
})
