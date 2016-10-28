var locations = require('../controllers/locations.server.controller');

var bodyparser = require('body-parser');

module.exports = function(router) {
  router.use(bodyparser.json());

router.route('/locations/:id')
      .get(locations.list);

router.param('id', locations.locationByID);
     
}
