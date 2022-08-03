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
    let fuelStatus = document.getElementById("fuelLevel");
    let cargoStatus = document.getElementById("cargoLevel");
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
pilotStatus.innerHTML = `Pilot ${pilot} is Ready!`;
copilotStatus.innerHTML = `Copilot ${copilot} is Ready!`

if (fuelLevel > 0 && fuelLevel < 10000){
    fuelStatus.innerHTML = `Not Enough Fuel for Launch!`
    launchStatus.innerHTML = `Shuttle not ready for launch.`
    launchStatus.style.color = 'red'
    list.style.visibility = 'visible';
}
if (cargoLevel > 10000){
    cargoStatus.innerHTML = `Cargo Too Heavy for Launch!`
    launchStatus.innerHTML = `Shuttle not ready for launch.`
    launchStatus.style.color = 'red'
    list.style.visibility = 'visible';
}
if (fuelLevel > 10000 && cargoLevel < 10000){
    launchStatus.innerHTML = 'Shuttle is Ready for Launch!'
    launchStatus.style.color = 'green';
}
//document.getElementById("myP").style.visibility = "visible";
};

async function myFetch() {
    
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response){
        return response.json();
});
    return planetsReturned;
}

function pickPlanet(planets) {
    let planetPicked = Math.floor(Math.random)* planets.length;
    return planets[planetPicked];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
