'use strict';

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('debug', false);

const datamodel = mongoose.model('category');

const Router = express.Router();

Router.get('/', (req, res) => {
    datamodel.find().exec().then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.get('/:cid', (req, res) => {
    const query = {cid:req.params.cid};
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
        res.status(201).json({success:true});

    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});


Router.put('/:cid', (req, res) => {
    const data = req.body;
    delete data._id;
   // const dataId = req.params.id;
    const query = {cid:req.params.cid};
    datamodel.findOneAndUpdate(query, {$set: data}).then(dataDb => {
        res.status(201).json({success:true});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.delete('/:cid', (req, res) => {
    const query = {cid:req.params.cid};
    datamodel.findOneAndRemove(query)
        .then(() => {
            res.json({success:true});
        }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
module.exports = Router;
