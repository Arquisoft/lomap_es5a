import express, { Application } from 'express';
const app: Application = express()
const port = 3000;

app.use(express.static('build'))

app.listen(port, ():void => {
  console.log('Webapp started on port ' + port);
}).on("error",(error:Error)=>{
    console.log('Error occured: ' + error.message);
});