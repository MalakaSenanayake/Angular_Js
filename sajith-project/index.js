'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

require('./models/Store_Db_Models/categoryDbModel');
require('./models/Store_Db_Models/drugDbModel');
require('./models/Store_Db_Models/drugBatchDbModel');

require('./models/Issue_Db_Models/issueDbModel');
require('./models/Issue_Db_Models/prescriptionDbModel');

require('./models/purchasing_Db_Models/supplierDbModel');
require('./models/purchasing_Db_Models/drugOrderDbModel');

const cateRouter = require('./routes/Store-Routes/categoryRoutes');
const drugRouter = require('./routes/Store-Routes/drugRoute');
const drugBatchRouter = require('./routes/Store-Routes/drugBatchHandleRoutes');

const issueRouter = require('./routes/Issue-Routes/IssueMainRoutes');
const prescriptionRouter = require('./routes/Issue-Routes/prescriptionRoutes');

const supplierRouter = require('./routes/purchase-Routes/supplierRoutes');
const purchaseRouter = require('./routes/purchase-Routes/drugOrderRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

mongoose.connect('mongodb://127.0.0.1:27017/sampleptest2', err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.use('/store/category',cateRouter);
app.use('/store/drug',drugRouter);
app.use('/store/batch',drugBatchRouter);

app.use('/issue/order/',issueRouter);
app.use('/issue/prescription',prescriptionRouter);

app.use('/purchase/supplier',supplierRouter);
app.use('/purchase/order',purchaseRouter);

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});
module.exports = app;