const express = require('express');
const router = express.Router();
const socialMediaLinkController = require('../controllers/socialMediaLink.controller');

router.get('/', socialMediaLinkController.getAllLinks);
router.post('/', socialMediaLinkController.createLink);
router.put('/:id', socialMediaLinkController.updateLink);
router.delete('/:id', socialMediaLinkController.deleteLink);

module.exports = router;
