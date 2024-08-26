const mongoose = require('mongoose');

const SocialMediaLinkSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    desc: { type: String }
});

module.exports = mongoose.model('SocialMediaLink', SocialMediaLinkSchema);
