//Calls in the Party Data in order to check through the answers and then display the data
var partyData = require("../data/party");

module.exports = function(app)
{
    //Displays all the Party Data as a JSON object
    app.get("/api/party", function(req, res) {
        res.json(partyData);
      });

    //Post route that takes in the answers provided by the Form and calculates the best matches.
    app.post("/api/party", function(req, res) {

    //Initializes the User's Answers into an array as well as an array that will hold the Differences found by the checkScores() app
      var userAnswers = req.body;
      var topChoices = [];

    //Cycles through all the party data and check each Party Member's scores with the user's answers
      for(var i=0;i<partyData.length;i++)
      {
        var partyCheck = {name:partyData[i].name, score:checkScores(userAnswers.user,partyData[i].scores)};
        topChoices.push(partyCheck);
      }
    
    //Sorts the differences and selects the top 2 Party Members based on how different they are from the User. 
    //The User's favored class is also selected based on which party class has the lowest difference (hence last in the array)
       topChoices.sort(function(a,b){return b.score - a.score});
    var faveClass = grabChar(topChoices[6].name).class;
    var party1 = grabChar(topChoices[0].name);
    var party2 = grabChar(topChoices[1].name);

    //Returns an object that contains the User's Favored class and the top 2 Party Members that would compliment their favored class
    var surveyResponse = {playerClass:faveClass, firstparty:party1, secondparty:party2};
    console.log(surveyResponse);
       res.send(surveyResponse);
       
      });

//Cycles through the Party Data and returns the instance whose name matches the name passed into the function
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

//Function that takes in the User's answers and compares them with those of a party member's before returning the difference in answers
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