'use strict';

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('debug', false);

const datamodel = mongoose.model('prescription');

const Router = express.Router();

Router.get('/', (req, res) => {
    datamodel.find().exec().then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.get('/:prescriptionid', (req, res) => {
    const query = {prescriptionid:req.params.prescriptionid};
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

Router.put('/:prescriptionid', (req, res) => {
    const data = req.body;
    delete data._id;
    // const dataId = req.params.id;
    const query = {prescriptionid:req.params.prescriptionid};
    datamodel.findOneAndUpdate(query, {$set: data}).then(dataDb => {
        res.json({success:true});
    }).catch(err => {
        console.error(err);
        res.json({success:false});
    });
});

Router.delete('/:prescriptionid', (req, res) => {
    const query = {prescriptionid:req.params.prescriptionid};
    datamodel.findOneAndRemove(query)
        .then(() => {
            res.json({success:true});
        }).catch(err => {
        console.error(err);
        res.json({success:false});
    });
});
module.exports = Router;

