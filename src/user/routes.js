const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get(`/user/:id`, controller.getUsers);
router.get('/account', controller.getAccountDetails);
router.get('/consent', controller.getConsent);

module.exports = router;
