const router = require('express').Router();

// render homepage
router.get('/', (req,res) => {
<<<<<<< HEAD
    // console.log(JSON.stringify(req.session));
=======
    
>>>>>>> main
    if (req.session.logged) {
        res.render('homepage', {
            logged: req.session.logged
        })
        return;
    };
    res.render('homepage')
<<<<<<< HEAD

=======
>>>>>>> main
});

// render login
router.get('/login', (req, res) => {
    
    if (req.session.logged) {
        res.redirect('/');
        return;
    };
    res.render('login');
});

// render signup
router.get('/signup', (req, res) => {
    if (req.session.logged) {
        res.redirect('/');
        return;
    };
    res.render('signup');
});

module.exports = router;
