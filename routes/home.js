const express = require('express');
const router = express.Router();
const Student = require('../models/Student');



// MEMBACA ROUTE
router.get('/', (req, res) => {
    Student.find((err, docs) => {
        if (err) throw err;
        // console.log(docs);
        res.render('home', {
            mahasiswas: docs
        })
    }).catch(err => {
        console.log(err);
    })
});


// MEMBUAT ROUTE
router.post('/add', (req, res, next) => {
    const {
        nama,
        nim,
        prodi
    } = req.body;
    console.log(nama, nim, prodi);
    const student = new Student({
        nama,
        nim,
        prodi
    });
    student.save(err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });

    // try {
    //     throw new Error('BROKEN')
    // } catch (err) {
    //     next(err)
    // }
});




// ROUTE UNTUK MENAMPILKAN UPDATEAN ELEMENT
router.get('/edit/:id', (req, res, next) => {
    console.log(req.params.id);
    // res.send(req.params.id);
    Student.findOneAndUpdate({_id: req.params.id},req.body, { new: true }, (err, docs)=>{
        console.log(docs);
        
        console.log(docs.nama);
        
        // console.log(docs._id);
        
        res.render('edit', {mahasiswa:docs});
    })
});





// ROUTE TO UPDATE ELEMENT
router.post('/edit/:id', (req, res, next) => {
    // let mahasiswa = {};
    
    // const {
    //     nama,
    //     nim,
    //     prodi
    // } = req.body;

    // mahasiswa.nama = nama;
    // mahasiswa.nim = nim;
    // mahasiswa.prodi = prodi;
    // console.log(mahasiswa);
    
    Student.findByIdAndUpdate({_id: req.params.id},req.body, (err)=>{
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.redirect('/');
        }
    })
    // next();
});



router.get('/:id',(req, res)=>{
    Student.findByIdAndDelete({_id:req.params.id}, err=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
})








module.exports = router;