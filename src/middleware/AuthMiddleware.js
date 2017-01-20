exports = function(req, res, next) {
    if(req.session.hasOwnProperty("user_id"))
        res.redirect("/login");
    else
        next();
};