// Write your helper functions here!
require('isomorphic-fetch');
//cargoLevel
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML =
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
    if  (testInput === ""|| testInput === null) {
    return "Empty";
}   else if (isNaN(testInput)){
    return "Not A Number"
}   else (!isNaN(testInput))
    return "Is A Number"
}

   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus")

if (validateInput(pilot)=== "Empty"||
 validateInput(copilot) === "Empty"||
  validateInput(fuelLevel) === "Empty" ||
   validateInput(cargoMass) === "Empty"){
    alert("All Fields Are Required");
    
} else if
    (validateInput(pilot) === "Is A Number"|| validateInput(copilot) === "Is A Number"){
        alert("Name's Should Not Include Numbers")
    //specific text?
    } else if
    (validateInput(fuelLevel)=== "Not A Number"||validateInput(cargoMass)=== "Not A Number"){
        alert("Fuel Level and Cargo Mass Should be Numbers")


} else
pilotStatus.innerHTML = `Pilot ${pilot} is Ready!`;
copilotStatus.innerHTML = `Copilot ${copilot} is Ready!`

if (cargoMass > 10000 && fuelLevel < 10000){
    fuelStatus.innerHTML = `Not Enough Fuel for Launch!`
    cargoStatus.innerHTML = `Cargo Too Heavy for Launch!`
    list.style.visibility = 'visible';
    launchStatus.style.color = 'red';
    launchStatus.innerHTML = `Shuttle not ready for launch.`
    
}

if (cargoMass < 10000 && fuelLevel <10000){
    fuelLevel.innerHTML = "Not Enough Fuel for Launch!"
    cargoStatus.innerHTML = `Cargo Mass is Good for Launch!`
    list.style.visibility = 'visible';
    launchStatus.style.color = 'red';
    launchStatus.innerHTML = `Shuttle not ready for launch.`

}
else (fuelLevel > 10000 && cargoMass < 10000);{
    fuelLevel.innerHTML = 'Fuel Level is Good for Launch!'
    cargoStatus.innerHTML = `Cargo Mass is Good for Launch!`
    list.style.visibility = 'visible';
    launchStatus.innerHTML = 'Shuttle is Ready for Launch!'
    launchStatus.style.color = 'green';
}
};

async function myFetch() {
    
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response){
        return response.json();
});
    return planetsReturned;
}

function pickPlanet(planets) {
    let planetPicked = Math.floor((Math.random())* planets.length);
    console.log(planets[planetPicked]);
    return planets[planetPicked];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
