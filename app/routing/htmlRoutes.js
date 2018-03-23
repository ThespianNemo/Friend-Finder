var path = require("path");

module.exports = function(app) {

  //route to display the home page. 

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/base", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/base.html"));
  });

  //route to display the survey page
  app.get("/survey/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

};





