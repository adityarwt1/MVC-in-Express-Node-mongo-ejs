const User = require('../models/user');

// Fetch All Users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.render('index', { users });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Add a User
exports.addUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) return res.redirect('/');
        
        await User.create({ name, email });
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};



