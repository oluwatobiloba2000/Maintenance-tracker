const uuidv1 = require('uuid/v1');

const requests =[
    {
        id : uuidv1(),
        title : "my request",
        description : "lorem impsum",
        time_requested : new Date(),
        status : pending
    },
    {
        id : uuidv1(),
        title : "my request 2",
        description : "lorem impsum",
        time_requested : new Date(),
        status : pending
    },
    {
        id : uuidv1(),
        title : "my request 3",
        description : "lorem impsum",
        time_requested : new Date(),
        status : pending
    },
]

module.exports = requests;