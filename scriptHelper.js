// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    window.addEventListener("load", function() {
        let form = document.querySelector("testForm");
        form.addEventListener("submit", function(event) {
  
    const  pilotName = document.querySelector("input[name=pilotName]");
    const  copilotName = document.querySelector("input[name=copilotName]");
    const  fuelLevel = document.querySelector("input[value=fuelLevel]");
    const  cargoMass = document.querySelector("input[value=cargoMass]");
           if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === ""||  cargoMass.value === "") {
            event.preventDefault(event); 
            alert("All fields are required!");   
           }
            if (pilotName.value !== string|| copilotName.value !== string){
            alert("Not a Number");
           }
            if (fuelLevel.value === isNaN(value)|| cargoMass.value === isNaN(value)){
            alert("Is a Number");
           }
             
        });
     });
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
