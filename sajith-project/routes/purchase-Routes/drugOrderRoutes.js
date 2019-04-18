'use strict';

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('debug', false);

const datamodel = mongoose.model('drugOrder');
const BatchModel = mongoose.model('Batch');

const Router = express.Router();

Router.get('/', (req, res) => {
    datamodel.find().exec().then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.get('/:oid', (req, res) => {
    const query = {oid:req.params.oid};
    datamodel.findOne(query).exec().then(data => {
        res.json(data || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.post('/', (req, res) => {
    var item = new datamodel(req.body);
    delete item._id;
    item.save().then(item => {
        res.json({success:true});

    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:oid', (req, res) => {
    const data = req.body;
    delete data._id;

    const query = {oid:req.params.oid};
    datamodel.findOneAndUpdate(query, {$set: data}).then(dataDb => {
        res.json({success:true});
    }).catch(err => {
        console.error(err);
        res.json({success:false});
    });
});

Router.delete('/:oid', (req, res) => {
    const query = {oid:req.params.oid};
    datamodel.findOneAndRemove(query)
        .then(() => {
            res.json({success:true});
        }).catch(err => {
        console.error(err);
        res.json({success:false});
    });
});
Router.get('/low/Qunatity', (req, res) => {
    BatchModel.find({qty:{$lt:10}}).exec().then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;
