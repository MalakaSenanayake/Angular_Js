'use strict'

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('debug', false);

const BatchModel = mongoose.model('Batch');

const Router = express.Router();

Router.get('/', (req, res) => {
    BatchModel.find().exec().then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.get('/:did/:bid', (req, res) => {
    const query = {$and:[{did:req.params.did},{batchId:req.params.bid}]};
    BatchModel.findOne(query).exec().then(data => {
        res.json(data || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.post('/', (req, res) => {
    const item = new BatchModel(req.body);
    item.save().then(item => {
        res.status(201).json({success:true});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:did/:bid', (req, res) => {
    const data = req.body;
    delete data._id;

    const query = {$and:[{did:req.params.did},{batchId:req.params.bid}]};
    BatchModel.findOneAndUpdate(query, {$set: data}).then(dataDb => {
        res.status(201).json({success:true});
    }).catch(err => {
        console.error(err);
        res.json({success:false});
    });
});

Router.delete('/:did/:bid', (req, res) => {
    const query = {$and:[{did:req.params.did},{batchId:req.params.bid}]};
    BatchModel.findOneAndRemove(query)
        .then(() => {
            res.json({success:true});
        }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
module.exports = Router;
