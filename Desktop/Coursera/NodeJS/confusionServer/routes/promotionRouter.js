const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promotions = require('../models/promotions')

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.get((req,res,next) => {
    Promotions.find({})
    .then((promo) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promo);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {

    Promotions.create(req.body)
    .then((promo)=>{
        console.log('Promo Created ', promo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promo);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    Promotions.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    },(err)=>{console.log(err);})
    .catch((err) => next(err));
});

promotionRouter.route('/:promotion')

.get((req,res,next)=>{
    Promotions.findById(req.params.promotion)
    .then((promo)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promo);
    },(err)=>{console.log(err);})
    .catch((err)=>{console.log(err);})
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+ req.params.promotion);
})
.put((req, res, next) => {
    Promotions.findByIdAndUpdate(req.params.promotion, {
        $set: req.body
    }, { new: true })
    .then((promo) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promo);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Promotions.findByIdAndDelete(req.params.promotion)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports = promotionRouter;