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
        var partyCheck = {name:partyData[i].name, score:checkScores(userAnswers.user,partyData[i].scores)};
        topChoices.push(partyCheck);
      }
      
       topChoices.sort(function(a,b){return b.score - a.score});
    var faveClass = grabChar(topChoices[6].name).class;
    var party1 = grabChar(topChoices[0].name);
    var party2 = grabChar(topChoices[1].name);

    var surveyResponse = {playerClass:faveClass, firstparty:party1, secondparty:party2};
    console.log(surveyResponse);
       res.send(surveyResponse);
       
      });
    function grabChar(x)
    {
      for(var i = 0;i<partyData.length;i++)
      {
        if(x === partyData[i].name)
        {
          return partyData[i];
        }
      }
    }

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