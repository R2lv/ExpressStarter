var ExpressRouter = require("./lib/ExpressRouter");

const authCtrl = require("./controllers/AuthController");

exports = function(app) {
    var mvc = new ExpressRouter(app);

    mvc.addControllerGroup("/auth", authCtrl);

};