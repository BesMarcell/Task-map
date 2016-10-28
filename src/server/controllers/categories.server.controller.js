var Category = require('../models/categories');

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};


exports.list = function(req, res) {

    Category.find().exec(function(err, data) {
        if (err) {

            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            console.log(data);
            res.json(data);
        }
    });
};
