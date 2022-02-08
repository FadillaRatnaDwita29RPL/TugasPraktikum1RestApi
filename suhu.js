
const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()              //deklarasi variabel express
const port = 8080                  //deklarasi port
 
app.use(bodyParser.urlencoded({extended:false}))
 
app.get('/', (req, res) => {       // endpoint '/'
    res.send("Hello Selamat datang di Konversi Suhu Online!")  
})
 
//Celcius
app . get ( '/convert/celcius/:suhu' , ( req , res ) =>{
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let suhu = Number(req.params.suhu)

    let farenhait = 9/5*suhu+32
    let kelvin = suhu + 273
    let reamur = 4/5*suhu
    // membuat objek yang berisi data yang akan dijadikan response
    let response= {
        farenhait : farenhait,
        kelvin : kelvin,
        reamur : reamur
    }

    res.send({
        message: "Berhasil mengkonversi suhu",
        data: {
            celcius : suhu,
            response
        }
    })
})

//Farenhait
app . get ( '/convert/farenhait/:suhu' , ( req , res ) =>{
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let suhu = Number(req.params.suhu)

    let celcius = 5/9*(suhu-32)
    let reamur = 4/9*(suhu-32)
    let kelvin = (5/9)*(suhu-32)+273

    // membuat objek yang berisi data yang akan dijadikan response
    let response= {
        celcius : celcius,
        kelvin : kelvin,
        reamur : reamur
    }

    res.send({
        message: "Berhasil mengkonversi suhu",
        data: {
            farenhait : suhu,
            response
        }
    })
})

//Reamur
app . get ( '/convert/reamur/:suhu' , ( req , res ) =>{
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let suhu = Number(req.params.suhu)

    let celcius = (5/4)*suhu
    let farenhait = ((9/4)*suhu)+32
    let kelvin = ((5/4)*suhu)+273
    // membuat objek yang berisi data yang akan dijadikan response
    let response= {
        farenhait : farenhait,
        kelvin : kelvin,
        celcius : celcius
    }

    res.send({
        message: "Berhasil mengkonversi suhu",
        data: {
            reamur : suhu,
            response
        }
    })
})

//Kelvin
app . get ( '/convert/kelvin/:suhu' , ( req , res ) =>{
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let suhu = Number(req.params.suhu)

    let farenhait = 9/5*(suhu-273)+32
    let celcius = suhu - 273
    let reamur = 4/5*(suhu-273)
    // membuat objek yang berisi data yang akan dijadikan response
    let response= {
        farenhait : farenhait,
        celcius : celcius,
        reamur : reamur
    }

    res.send({
        message: "Berhasil mengkonversi suhu",
        data: {
            kelvin : suhu,
            response
        }
    })
})
 
app.listen(port, () => {            
    console.log(`Server di port ${port}`)
})

