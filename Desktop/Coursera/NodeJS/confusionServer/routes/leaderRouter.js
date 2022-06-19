const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Leaders = require('../models/leaders');
const authenticate = require('../authenticate');


const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.get((req,res,next) => {
    Leaders.find({})
    .then((leaders)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leaders);
    },(err)=>{console.log(err)})
    .catch((err)=>{console.log(err)});
})
.post(authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
    Leaders.create(req.body)
    .then((leader)=>{
        console.log('Leader Created ', leader);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leader);
    },(err)=>{console.log(err);})
    .catch((err)=>{console.log(err);})
})
.put(authenticate.verifyUser,(req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
    Leaders.remove({})
    .then((resp)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    },(err)=>{console.log(err)})
    .catch((err)=>{console.log(err);})
});

leaderRouter.route('/:leader')

.get((req,res,next)=>{
    Leaders.findById(req.params.leader)
    .then((lead)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(lead);
    },(err)=>{console.log(err)})
    .catch((err)=>{console.log(err)});
})
.post(authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/'+ req.params.leader);
})
.put(authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
    Leaders.findByIdAndUpdate(req.params.leader,{
        $set:req.body
    })
    .then((resp)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    },(err)=>{console.log(err)})
    .catch((err)=>{console.log(err);})
})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
    Leaders.findByIdAndDelete(req.params.leader)
    .then((resp)=>{
        console.log("Deleted Leader");
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    },(err)=>{console.log(err)})
    .catch((err)=>{console.log(err);})
});
module.exports = leaderRouter;