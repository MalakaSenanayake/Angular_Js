'use strict'
const  mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
const  schema = mongoose.Schema;

const drugSchema = new schema({

    category:String,
    name:String,
    type:String,
    price:Number
});
drugSchema.plugin(AutoIncrement, {inc_field: 'did'});
const drug =mongoose.model('drug',drugSchema);
module.exports =drug;
