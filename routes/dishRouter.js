const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("will send all the dishes to you!")
})
.post((req,res,next)=>{
    res.end("will add the dish : " + req.body.name + ' with details: ' +
    req.body.description );
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("Put operation not supported on dishes");
})
.delete((req,res,next)=>{
    res.end("Deleting all the dishes to you!")
});

module.exports = dishRouter;