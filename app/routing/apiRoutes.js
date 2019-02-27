var partyData = require("../data/party");

module.exports = function(app)
{
    app.get("/api/party", function(req, res) {
        res.json(partyData);
      });

    app.post("/api/party", function(req, res) {

      var userAnswers = req.body;
      var topChoices = [];

      for(var i=0;i<partyData.length;i++)
      {
        var partyCheck = {name:partyData[i].name, score:checkScores(userAnswers,partyData[i].scores)};
        topChoices.push(partyCheck);
      }
      
       topChoices.sort(function(a,b){return b.score - a.score});
       
      });

    function checkScores(userArray,partyArray)
      {
        var difference = 0;
        for(var z=0;z<partyArray.length;z++)
        {
          difference = difference + Math.abs(userArray[z] - partyArray[z]);
        }
        return difference;
      };
}