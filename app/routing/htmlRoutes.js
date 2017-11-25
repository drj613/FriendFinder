var path = require('path');

module.exports = function(app){
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // Default to home if there is no route
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}