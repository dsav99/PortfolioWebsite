const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name );
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leaderRouter.route('/:leader')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send details of the leader: ' + req.params.leader +' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
  res.end('POST operation not supported on /leaders/'+ req.params.leader);
})
.put((req, res, next) => {
    res.end('Updating the leader: ' + req.params.leader + '\n');
})
.delete((req, res, next) => {
    res.end('Deleting leader: ' + req.params.leader);
});
module.exports = leaderRouter;