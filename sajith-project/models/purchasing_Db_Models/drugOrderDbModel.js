

'use strict'
const  mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
const  schema = mongoose.Schema;

const drugOrderschema = new schema({


    did:String,
    category:String,
    name:String,
    type:String,
    supplierName:String,
    qty:Number,
    status:{
        type:String,
        default:'not received'
    }

});
drugOrderschema.plugin(AutoIncrement,{inc_field:'oid'});
const drugOrder =mongoose.model('drugOrder',drugOrderschema);
module.exports =drugOrder;