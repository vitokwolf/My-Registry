const router = require('express').Router();
const { User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    User.findAll({
        // will uncomment this for deployed app
        // attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// add a user
router.post('/', (req, res) => {
    // expects {username: 'sinajeen', email: 'sinajeen@gmail.com', password: 'password1234'}
    // dummy data to use in insomnia
    // {
    //     "username": "sinajeen",
    //     "email": "sinajeen@gmail.com",
    //     "password": "password1234"
    // }
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete an user
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
