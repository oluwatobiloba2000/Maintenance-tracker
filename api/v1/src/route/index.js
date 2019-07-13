let express = require("express");
const controller = require('../controllers')
//initialize express
const app = express();

app.get('/' , (req ,res) =>{
    return res.json({message : `Maintenance Tracker Api version 1`});
});

app.get('/request' , controller.allRequests);

app.get('/request/:id' , controller.getRequestById)

app.post('/request' , controller.createRequest);

app.use('*' , (req, res)=>{
    return res.send('Route not found');
})

module.exports = app;