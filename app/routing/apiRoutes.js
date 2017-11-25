// Using data from the 'friends' module
var friends = require('../data.friends.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('api/friends', function(req, rest){
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;

        var userName = userData.name,
            userPhoto = userData.photo,
            userScores = userData.scores;

        var totalDifference = 0;

        // Loop through array of friends
        for (var i=0; i < friends.length; i++){
            console.log(friends[i].name);
            totalDifference = 0;

            // Loop through scores of each friend
            for (var j = 0; j < friends[i].scores[j]; j++){
                totalDifference += Math.abs(parseInt(userScores[j] - parseInt(friends[i].scores[k])));

                // As we loop, replace the current best match with one that is more suitable
                if (totalDifference <= bestMatch.friendDifference){
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }

            }
        }

        friends.push(userData);

        res.json(bestMatch);

    });
}