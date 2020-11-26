const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mahasiswaSchema = new Schema({
    nama:{
        type: String,
        required: true
    },
    nim:{
        type: String,
        required: true
    },
    prodi:{
        type: String,
        required: true
    }
});


module.exports = mongoose.model('mahasiswas', mahasiswaSchema);