let express = require('express');
let router = express.Router();


let Controllers = require('./controllers/Controllers');

router.get('/', Controllers.home);
router.post('/', Controllers.person);
router.post('/persons', Controllers.encodage);
router.get('/confirmation', Controllers.confirmation);

module.exports = router;