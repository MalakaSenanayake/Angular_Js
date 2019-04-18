'use strict';

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('debug', false);

const datamodel = mongoose.model('supplier');

const Router = express.Router();

Router.get('/', (req, res) => {
    datamodel.find().exec().then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.get('/:suppid', (req, res) => {
    const query = {suppid:req.params.suppid};
    datamodel.findOne(query).exec().then(data => {
        res.json(data || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.post('/', (req, res) => {
    const item = new datamodel(req.body);
    item.save().then(item => {
        res.json({success:true});

    }).catch(err => {
        console.error(err);
        res.json({success:false});
    });
});

Router.put('/:suppid', (req, res) => {
    const data = req.body;
    delete data._id;
    // const dataId = req.params.id;
    const query = {suppid:req.params.suppid};
    datamodel.findOneAndUpdate(query, {$set: data}).then(dataDb => {
        res.json({success:true});
    }).catch(err => {
        console.error(err);
        res.json({success:false});
    });
});

Router.delete('/:suppid', (req, res) => {
    const query = {suppid:req.params.suppid};
    datamodel.findOneAndRemove(query)
        .then(() => {
            res.json({success:true});
        }).catch(err => {
        console.error(err);
        res.json({success:false});
    });
});
module.exports = Router;
