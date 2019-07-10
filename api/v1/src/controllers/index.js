const uuidv1 = require("uuid/v1");
let requests = require("../data/data");

class  RequestController {
    //GET /requests getting all requesta
    static allRequests(req ,res){
        return res.json({
            requests
        });
    }

    //GET /requests/:<request id>
    static getRequestById(req, res){
        const id = req.params.id;
        const request = requests.find(each => each.id == id);
        if(!request){
            return res.status(404).json({
                message : `request with id:${id} cannot be found , check the id and try again !`
            });
        }
        return res.json({ request });
    }

    //POST /request
    static createRequest(req ,res){
        const title = req.body.title;
        const description = req.body.description;
        if(!name || !description){
            return res.status(400).json({
                message : `request must must have a title and description`
            });
        }
        const id = uuidv1();

        //create request
        const request = {
            id : id,
            title : title,
            description : description,
            time_requested : new Date(),
            status : pending
        }

        //append it to the request array
        requests.push(request);
        return res.json({request});
    }
}