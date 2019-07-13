let express = require("express");
const controller = require('../controllers')
//initialize express
const app = express();
//GET homepage
app.get('/' , (req ,res) =>{
    return res.json({message : `Maintenance Tracker Api version 1`});
});
//GET get all requests
app.get('/request' , controller.allRequests);

//GET get a request by its id 
app.get('/request/:id' , controller.getRequestById);

//POST create a request
app.post('/request' , controller.createRequest);

//PUT modify a request by id
app.put('/request/:id' , controller.updateRequest);

app.use('*' , (req, res)=>{
    return res.send('Route not found');
})

module.exports = app;