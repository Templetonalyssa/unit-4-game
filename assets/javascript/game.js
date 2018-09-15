$(document).ready(function() {

    console.log ("game starting");

  var targetNumber = Math.floor(Math.random()*102)+19;

  var counter = 0;
  var wins = 0;
  var losses = 0;

  var blueCrystal = $("#blue-crystal");
  var purpleCrystal = $("#purple-crystal");
  var clearCrystal = $("#clear-crystal");
  var opal = $("#opal");


  // Random value for the crystals
  var blueCrystalNumber = Math.floor(Math.random()*12) +1;
  var clearCrystalNumber = Math.floor(Math.random()*12) + 1;
  var purpleCrystalNumber = Math.floor(Math.random()*12) +1;
  var opalNumber = Math.floor(Math.random()*12)+1;
  

    blueCrystal.attr("data-bluecrystalvalue", blueCrystalNumber);
    clearCrystal.attr("data-clearcrystalvalue", clearCrystalNumber);
    purpleCrystal.attr("data-purplecrystalvalue", purpleCrystalNumber);
    opal.attr ("data-opalvalue", opalNumber);

$("#number-to-guess").text(targetNumber);

// //   // This time, our click event applies to just one crysta

$("#blue-crystal").on("click", function() {

  var blueCrystalValue = ($(this).attr("data-bluecrystalvalue"));
   blueCrystalValue = parseInt(blueCrystalValue);
    counter += blueCrystalValue;
    console.log(counter);
    console.log("blue crystal =" + blueCrystalValue)
    totalScore();
  })

 $("#purple-crystal").on("click", function() {

  var purpleCrystalValue = ($(this).attr("data-purplecrystalvalue"));
     purpleCrystalValue = parseInt(purpleCrystalValue);
    counter += purpleCrystalValue;
    console.log(counter);
    console.log("purple crystal =" + purpleCrystalValue);
    totalScore();
 })

// All of the same game win-lose logic applies. So the rest remains unchanged.
var totalScore =  function() {
    $("#totalscore").text(counter);

   if (counter === targetNumber) {
   alert("You win!");
   reset();
   wins++
   }

     else if (counter >= targetNumber) {
       alert("You lose!!");
       reset();
       losses++;
     }
    }

var reset = function(){
    counter = 0;
    targetNumber= Math.floor(Math.random()*102)+19;
    $("#totalscore").text(counter);
    $("#number-to-guess").text(targetNumber);
  blueCrystalNumber = Math.floor(Math.random()*12) +1;
  clearCrystalNumber = Math.floor(Math.random()*12) + 1;
  purpleCrystalNumber = Math.floor(Math.random()*12) +1;
  opalNumber = Math.floor(Math.random()*12)+1;
  blueCrystal.attr("data-bluecrystalvalue", blueCrystalNumber);
  clearCrystal.attr("data-clearcrystalvalue", clearCrystalNumber);
 purpleCrystal.attr("data-purplecrystalvalue", purpleCrystalNumber);
 opal.attr ("data-opalvalue", opalNumber);
}

})