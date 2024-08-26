const SocialMediaLink = require('../models/socialMediaLink.model');

// Get all social media links
exports.getAllLinks = async (req, res) => {
    try {
        const links = await SocialMediaLink.find();
        res.json(links);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new social media link
exports.createLink = async (req, res) => {
    const link = new SocialMediaLink({
        name: req.body.name,
        url: req.body.url,
        desc: req.body.desc
    });

    try {
        const newLink = await link.save();
        res.status(201).json(newLink);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a social media link
exports.updateLink = async (req, res) => {
    const { id } = req.params;  // ID'yi almak için destructuring kullan
    if (!id) {
        return res.status(400).json({ message: 'Link ID is missing' });
    }
    try {
        const link = await SocialMediaLink.findById(id);
        if (!link) {
            return res.status(404).json({ message: 'Link not found' });
        }
        if (req.body.name) link.name = req.body.name;
        if (req.body.url) link.url = req.body.url;
        if (req.body.desc) link.desc = req.body.desc;

        const updatedLink = await link.save();
        res.json(updatedLink);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const mongoose = require('mongoose');
// Delete a social media link
exports.deleteLink = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid Link ID' });
    }

    try {
        const result = await SocialMediaLink.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Link not found' });
        }

        res.json({ message: 'Deleted Link' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

