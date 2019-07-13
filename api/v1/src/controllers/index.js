const uuidv1 = require('uuid/v1');

let requests = require("../data/data");

class RequestController {
    //GET /requests getting all requesta
    static allRequests(req, res) {
        return res.json({
            "Total requests": requests.length,
            requests
        });
    }

    //GET /requests/:<request id>
    static getRequestById(req, res) {
        const id = req.params.id;
        const request = requests.find(each => each.id === id);
        if (!request) {
            return res.status(404).json({
                message: `request with id:${id} cannot be found , check the id and try again !`
            });
        }
        return res.json({
            request
        });
    }

    //POST /request
    static createRequest(req, res) {
        const title = req.body.title;
        const description = req.body.description;
        if (!title || !description) {
            return res.status(400).json({
                message: `request must have a title and description`
            });
        }
        const id = uuidv1();

        //create request
        const request = {
            id: id,
            title: title,
            description: description,
            time_requested: new Date(),
            status: 'pending'
        }

        //append it to the request array
        requests.push(request);
        return res.json({
            message: `Request made successfully`,

            request
        });
    }
    //PUT /request/:id
    static updateRequest(req, res) {
        const id = req.params.id;
        const title = req.body.title;
        const description = req.body.description;
        let requestToUpdate = requests.find(request => request.id == id);
        if (requestToUpdate) {
            let newRequest = requests.map(request => {
                if (request.id === id) {
                    return {
                        id: request.id,
                        title: title || request.title,
                        description : description,
                        time_requested: request.time_requested
                    };
                }
                return request;
            });
             requests = newRequest;
            return res.json({
                message : `request updated !!`
            })
        }
        return res.status(400).send({
            message : `cannot update request , please check the id : ${id} because id : ${id} is not on the server`
        })

    }
}

module.exports = RequestController;