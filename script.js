//import { addDestinationInfo, formSubmission } from "./scriptHelper";

//const { formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load", function() {

   let listedPlanets;
   //listedPlanetsResponse;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  let selectedPlanet =
 pickPlanet(listedPlanets);  
 addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl);
    })
    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";



form.addEventListener("submit", function(event){
event.preventDefault();

let pilotInput = document.querySelector("input[name=pilotName]");
let pilot = pilotInput.value;
let copilotInput =  document.querySelector("input[name=copilotName]");
let copilot = copilotInput.value;
let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
let fuelLevel = fuelLevelInput.value;
let cargoLevelInput = document.querySelector("input[name=cargoLevel]");
let cargoLevel = cargoLevelInput.value;
        

 formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

  

});

});

