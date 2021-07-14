const mongoose = require("mongoose")

const Schema = mongoose.Schema

const student  = new Schema({
    name:String,
    contact: { //  Email
        type: String,
        required: [true, 'Please add a contact'],
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          'Please add a valid email'
        ]
    },
    subjects: [String],
    // society: [String],
    class:Number,
    year:Number,
  
    
},
{ strict: false });



module.exports = mongoose.model('Student',student ); 