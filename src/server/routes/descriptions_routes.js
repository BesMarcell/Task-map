var descriptions = require('../controllers/descriptions.server.controller');

var bodyparser = require('body-parser');

module.exports = function(router) {
  router.use(bodyparser.json());

router.route('/descriptions/:id')
      .get(descriptions.list);

router.param('id', descriptions.descriptionByID);
      
}
