const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json({ users: users });
};

exports.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
};


exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: 'User deleted' });
};
