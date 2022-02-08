const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()              //deklarasi variabel express
const port = 8080                  //deklarasi port
 
app.use(bodyParser.urlencoded({extended:false}))
 
app.get('/', (req, res) => {       // endpoint '/'
    res.send("Hello Selamat datang di perhitungan BMI")  
})

app . post ( '/bmi' , ( req , res ) =>{
    let tinggi = req.body.tinggi
    let berat = req.body.berat

    let bmi = berat/(tinggi * tinggi)
    let status = "kosong"
    if(bmi < 18.5){
         status = "Kekurangan berat badan"
    }else if(bmi >= 18.5 && bmi<=24.999999999999999){
         status = "Normal (ideal)"
    }else if(bmi >= 25 && bmi <= 29.999999999999999){
         status = "Kelebihan berat badan"
    }else if(bmi >= 30){
         status = "Kegemukan (Obesitas)"
    }
    
    // membuat objek yang berisi data yang akan dijadikan response
    let response= {
        bmi : bmi,
        status : status
    }

    res.send({
        message: "Berhasil melakukan perhitungan BMI",
        data: {
            tinggi : tinggi,
            berat : berat,
            response
        }
    })
})

app.listen(port, () => {            
    console.log(`Server di port ${port}`)
})