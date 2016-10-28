var Location = require('../models/locations');

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
    Location.find({categoryId: req.locId}).exec(function(err, data) {
        if (err) {

            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(data);
        }
    });
};

exports.locationByID = function(req, res, next, id) {
    req.locId = id;
    next();
};

