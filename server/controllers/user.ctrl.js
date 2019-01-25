const User = require('./../models/user');
//const Run = require('./../models/run');

module.exports = {
    getUsers: (req, res) => {
        //TODO
        res.send('all users');
        res.end();
    },
    getUser: (req, res) => {
        User.findById(req.params.id).populate('runs').exec((err, user) => {
            if (err) throw err;
            res.send(user);
            res.end();            
        });
    },
    addUser: (req, res) => {
        const user = new User({
            username: req.body.username,
            country: req.body.country,
            twitchName: req.body.twitchName,
            avatar: req.body.avatar,
            dateCreated: Date.now()
        });

        user.save((err) => {
            if(err) throw err;
        });
    },
    editUser: (req, res) => {
        //TODO
        res.send('edit');
        res.end();
    },
    deleteUser: (req, res) => {
        //TODO
        res.send('delete');
        res.end();
    }
}