var categories = require('../controllers/categories.server.controller');

var bodyparser = require('body-parser');

module.exports = function(router) {
  router.use(bodyparser.json());

router.route('/categories')
      .get(categories.list);
  
}
