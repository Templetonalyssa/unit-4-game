$(document).ready(function() {

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
  
  //linking the images with random values
    blueCrystal.attr("data-bluecrystalvalue", blueCrystalNumber);
    clearCrystal.attr("data-clearcrystalvalue", clearCrystalNumber);
    purpleCrystal.attr("data-purplecrystalvalue", purpleCrystalNumber);
    opal.attr ("data-opalvalue", opalNumber);

    $("#number-to-guess").text(targetNumber);
   // $("#totalwins").text(wins);
    //$("#totallosses").text(losses);


// On click event for each crystal image

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

 $("#clear-crystal").on("click", function() {

  var clearCrystalValue = ($(this).attr("data-clearcrystalvalue"));
     clearCrystalValue = parseInt(clearCrystalValue);
    counter += clearCrystalValue;
    console.log(counter);
    console.log("clear crystal =" + clearCrystalValue);
    totalScore();
 })

 $("#opal").on("click", function() {

  var opalNumber = ($(this).attr("data-opalvalue"));
     opalNumber = parseInt(opalNumber);
    counter += opalNumber;
    console.log(counter);
    console.log("opal =" + opalNumber);
    totalScore();
 })


var totalScore =  function() {
    $("#totalscore").text(counter);
   if (counter === targetNumber) {
   alert("You win!");
   reset();
   wins++;
   console.log(wins);
   $("#totalwins").text(wins);
   }

     else if (counter >= targetNumber) {
       alert("You lose!!");
       reset();
       losses++;
       console.log(losses);
       $("#totallosses").text(losses);

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