
const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()              //deklarasi variabel express
const port =  1000               //deklarasi port
 
app.use(bodyParser.urlencoded({extended:false}))
 
app.get('/', (req, res) => {       // endpoint '/'
    res.send("Hello Admin! Selamat datang di Bee Library!")  
})

app.post('/library', (req, res)=>{
    let namaBuku = req.body.nama
    let penerbit = req.body.penerbit
    let jumHalaman = req.body.jumHalaman
    let tahunTerbit = req.body.tahunTerbit
    let jenis = req.body.jenis
    let harga = req.body.harga
    res.end('Berhasil menambahkan data buku baru dengan namaBuku : ' + namaBuku)
    
})

app.get('/library/:id', (req,res)=>{
    let id = req.params.id
    let namaBuku = req.body.nama
    let penerbit = req.body.penerbit
    let jumHalaman = req.body.jumHalaman
    let tahunTerbit = req.body.tahunTerbit
    let jenis = req.body.jenis
    let harga = req.body.harga
    res.end('Menampilkan data buku dengan ID : ' + id)
    // res.end('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PRINT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    // res.end('Nama Buku : ' + namaBuku)
    // res.end('Jenis Buku : ' + jenis)
    // res.end('Penerbit : ' + penerbit)
    // res.end('Tahun Terbit : ' + tahunTerbit)
    // res.end('Jumlah Halaman : ' + jumHalaman)
    // res.end('Harga Buku : ' + harga)
})

app.delete('/library/:id', (req, res) => {
    let id = req.params.id
    let namaBuku = req.body.nama
    res.end('Berhasil Menghapus')
    // res.end('Buku dengan ID: ' + id+' telah dihapus, dengan nama buku '+ namaBuku)
});

app.put('/library/:id', (req, res) => {
    let id = req.params.id
    let namaBuku = req.body.nama
    let penerbit = req.body.penerbit
    let jumHalaman = req.body.jumHalaman
    let tahunTerbit = req.body.tahunTerbit
    let jenis = req.body.jenis
    let harga = req.body.harga
    res.end('Berhasil Mengupdate')
    // res.end('Buku dengan ID: ' + id+' telah diupdate, dengan data sebagai berikut')
    // res.end('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PRINT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    // res.end('Nama Buku : ' + namaBuku)
    // res.end('Jenis Buku : ' + jenis)
    // res.end('Penerbit : ' + penerbit)
    // res.end('Tahun Terbit : ' + tahunTerbit)
    // res.end('Jumlah Halaman : ' + jumHalaman)
    // res.end('Harga Buku : ' + harga)
});

app.listen(port, () => {            
    console.log(`Server di port ${port}`)
})

