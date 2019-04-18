

'use strict'
const  mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
const  schema = mongoose.Schema;

const supplierschema = new schema({


    comName:String,
    comAddress:String,
    comMail:String,
    comTel:Number,
    suplierName:String,
    supMail:String,
    SupMobile:Number,
    date:Date,

});
supplierschema.plugin(AutoIncrement,{inc_field:'suppid'})
const supplier =mongoose.model('supplier',supplierschema);
module.exports =supplier;