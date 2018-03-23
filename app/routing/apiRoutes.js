var friendsData = require("../data/friends.js");

module.exports = function(app) {

// display a JSON of all possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

// create new friend in table
  app.post("/api/friends", function(req, res) {
  
// get input from survey    
    var newFriend = req.body;
    var newFriendScores = newFriend['scores[]'];

    var totDiff;

    var besties = {
      "name": "",
      "photo": "",
      "friendDiff": 300
    }
    
    //compare the user's choices to all of the choices of the friends in the friends array
    for(var i = 0; i < friendsData.length;i++) {
      var currFriend = friendsData[i];
      
      totDiff = 0;

      for (var j = 0; j < currFriend.scores.length;j++) {
        var currFriendScore = currFriend.scores[j];
        
        var currUserScore = newFriendScores[j];
        
        totDiff += Math.abs(parseInt(currUserScore) - parseInt(currFriendScore));
      }
      
      //keep updating the best match until all entries have been compared
      if (totDiff <= besties.friendDiff) {
        besties.name = currFriend.name;
        besties.photo = currFriend.photo;
        besties.friendDiff = totDiff;
      }
    }
    
    //Send best match info to modal
    res.json(besties);
  });
};




