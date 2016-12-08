$(document).ready(function(){
//Global Variables
var rey = $("#reyButton");
var reyHP = Math.floor((Math.random()*150) + 110);
$("#reyHP").text(reyHP);

var darth = $("#darthButton");
var darthHP = Math.floor((Math.random()*150) + 110);
$("#darthHP").text(darthHP);

var finn = $("#finnButton");
var finnHP = Math.floor((Math.random()*150) + 110);
$("#finnHP").text(finnHP);

var padme = $("#padmeButton");
var padmeHP = Math.floor((Math.random()*150) + 110);
$("#padmeHP").text(padmeHP);

var healthPoints = Math.floor((Math.random()*80) + 10);



var attackPower;

var counterAttackPower;

// var characPowers = {
//     generate: function(){
//       healthPoints = Math.floor((Math.random()*120) + 19),
//       attackPower = Math.floor((Math.random()*80) + 10),
//       counterAttackPower = Math.floor((Math.random()*40) + 10)
//     }
//   }


// console.log(characPowers);

// var reyPower = characPowers.generate(rey);
// console.log (reyPower);

// console.log(darthsidious);


//Functions

//For all charac options display HP on button

//Player chooses their character. This is their character the entire game.
    //Character moves to the "Your Character" area
    //Player's charac has HP, AP, CAP

//Player chooses their first opponent.
    //Opponent moves to "defender area"
    //Opponents only have CAP
    //Display CAP

//Attack Button
  //On click...
  //Player's character damages opponent, reduces the opponent's HP. Opponent HP reposted.
  //Player's AP increases by base AP
      //For example, if base AP = 6, attack increases by 6 (12, 18, 24..)

  //Opponent instantly counter attacks and decreaes the player's HP. HP reposted.
  //Keep hitting opponent until defeated
  //If the opponent has HP less than 0, remove from the defender area
  //Choose new opponent

//Win by defeating all remaining playrs.

});
