'use strict'

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('debug', false);

const IssueModel = mongoose.model('issueOrder');
const BatchModel = mongoose.model('Batch');

const Router = express.Router();

Router.get('/', (req, res) => {
    IssueModel.find().exec().then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.get('/:paid/:presid', (req, res) => {
    const query = {$and:[{patientid:req.params.paid},{prescriptionid:req.params.presid}]};
    IssueModel.findOne(query).exec().then(data => {
        res.json(data || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.post('/', (req, res) => {
    const item = new IssueModel(req.body);
    item.save().then(item => {
        res.json({success:true});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:paid/:presid', (req, res) => {
    const data = req.body;
    delete data._id;
    // const dataId = req.params.id;
    const query = {$and:[{patientid:req.params.paid},{prescriptionid:req.params.presid}]};
    IssueModel.findOneAndUpdate(query, {$set: data}).then(dataDb => {
        res.json({success:true});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.delete('/:paid/:presid', (req, res) => {
    const query = {$and:[{patientid:req.params.paid},{prescriptionid:req.params.presid}]};
    IssueModel.findOneAndRemove(query)
        .then(() => {
            res.json({success:true});
        }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});


module.exports = Router;

