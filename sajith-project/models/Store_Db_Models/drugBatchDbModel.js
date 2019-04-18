'use strict'
const  mongoose = require('mongoose');
const  schema = mongoose.Schema;

const drugBatchSchema = new schema({
    did:String,
    category:String,
    name:String,
    type:String,
    price:Number,
    batchId:String,
    mDate:Date,
    eDate:Date,
    qty:Number
});

const Batch = mongoose.model('Batch',drugBatchSchema);
module.exports = Batch;