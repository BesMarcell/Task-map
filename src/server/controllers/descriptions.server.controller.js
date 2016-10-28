var Description = require('../models/descriptions');

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
    Description.findOne({locationId: req.descrId}).exec(function(err, data) {
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

exports.descriptionByID = function(req, res, next, id) {
    req.descrId = id;
    next();
};

