'use strict'
const  mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
const  schema = mongoose.Schema;

const prescriptionschema = new schema({

    doctorname:String,
    gmail:String,
    patientid:String,
    gender:String,
    date:Date,
    druglist:String,
    status:{
        type:String,
        default:'not complete'
    }




});
prescriptionschema.plugin(AutoIncrement,{inc_field:'prescriptionid'})
const prescription =mongoose.model('prescription',prescriptionschema);
module.exports =prescription;