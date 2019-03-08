# PartyFinder

Welcome to our Tavern stranger. If you're looking to make your mark as an adventurer, you're going to need some help. Luckily for you, we make it our duty to pair up **would be** adventurers with their perfect counterparts. 

Please sign our log book and answer a few questions. Adventure, gold and glory awaits!!


### App Description

The RPG Party Finder App is a simple survey Node app that takes the user's answers to multiple questions and based on those answers it will do two things:
   1. The app will compare the user's answers to all the stored answers and then will suggest the user's *favored class*. 
   2. The app will display 2 potential party members that compliment the user's favored class.
   
The app will deliver these answers by comparing each of the user's answers with each character in the PartyData array. Based on these comparisons the app generates a **difference** score, which is then sorted from highest to lowest. From this ordered list, the app verifies which class has lowest diffecence score and selects that class as the best match for the user.

As with most Role Playing Game campaigns, 3 party members of the same class will rarely succeed. (*Yes, 3 rogues seem like a good idea until they run into something much bigger than them*) The app will take the 2 Party Members with the biggest difference from the user's favored class, and then it will display their profile pictures to the user as potential party members.
