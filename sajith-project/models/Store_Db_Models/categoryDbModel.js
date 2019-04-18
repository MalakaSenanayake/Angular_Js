'use strict'
const  mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
const  schema = mongoose.Schema;

const cateschema = new schema({

    name:String

});
cateschema.plugin(AutoIncrement, {inc_field: 'cid'});
const category =mongoose.model('category',cateschema);
module.exports =category;