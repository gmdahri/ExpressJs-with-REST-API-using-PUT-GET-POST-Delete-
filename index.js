const expres = require('express');

const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = expres();
app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/dishes',dishRouter);

app.get('/dishes/:dishId',(req,res,next)=>{
    res.end("will send details of the dish: "+req.params.dishId + 'to you!')
});
app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode=403;
    res.end("Post operation not supported on /dishes/"+req.params.dishId);
});

app.put('/dishes/:dishId',(req,res,next)=>{
    res.write('Updating the dish: '+ req.params.dishId + '\n');
    res.end('will update the dish: ' + req.body.name + ' with description: '
    + req.body.description);
});
app.delete('/dishes/:dishId',(req,res,next)=>{
    res.end("Deleting all the dish: " + req.params.dishId);
});

app.use(expres.static(__dirname + '/public'));



app.use((req,res, next)=>{
   

    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end("<html><body><h1>hello, world</h1></body></html>");
})

const server= http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`)
})