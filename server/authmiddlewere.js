function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/home");
    }
    next();
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}


module.exports = {

    checkAuthenticated,
    checkNotAuthenticated
}