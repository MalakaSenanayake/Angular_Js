'use strict'
const  mongoose = require('mongoose');
const  schema = mongoose.Schema;

const issueOrderSchema = new schema({

    patientid:String,
    prescriptionid:String,
    doctorname:String,
    gmail:String,
    date:Date,
    druglist:String,
    totalPrice:Number,
    payment:String

});

const issueOrder =mongoose.model('issueOrder',issueOrderSchema);
module.exports =issueOrder;
