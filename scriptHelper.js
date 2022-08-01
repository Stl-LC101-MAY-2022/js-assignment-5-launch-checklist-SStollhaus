// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
   div.innerHTML =
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src=" ${imageUrl}">`

}

function validateInput(testInput) {
    if  (testInput === "") {
    return "Empty";
}   else if (isNan(testInput)){
    return "Not A Number"
}   else (!isNaN(testInput))
    return "Is A Number"
}

   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotName");
    let copilotStatus = document.getElementById("copilotName");
    let fuelLevelStatus = document.getElementById("fuelLevel");
    let cargoLevelStatus = document.getElementById("cargoLevel");
    let launchStatus = document.getElementById("launchStatus")

if (validateInput(pilot)=== "Empty"||
validateInput(copilot) === "Empty"||
validateInput(fuelLevel) === "Empty" ||
validateInput(cargoLevel) === "Empty"){
    alert("All Fields Are Required");
    
} else if
    (validateInput(pilot) === "Is A Number"|| validateInput(copilot) === "Is A Number"){
        alert("Name's Should Not Include Numbers")
    
    } else if
    (validateInput(fuelLevel)=== "Not A Number"||validateInput(cargoLevel)=== "Not A Number"){
        alert("Fuel Level and Cargo Mass Should be Numbers")


};
//document.getElementById("myP").style.visibility = "visible";
};

async function myFetch() {
    
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response){
        return response.json();
});
    return planetsReturned;
}

function pickPlanet(planets) {
    let selectedPlanet = Math.floor(Math.random)* planets.length;
    return planets[selectedPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
