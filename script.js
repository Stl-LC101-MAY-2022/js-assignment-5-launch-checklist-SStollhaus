import { addDestinationInfo } from "./scriptHelper";

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
//    async function myFetch() {
    
//     let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response){
//         return response.json();
// });
//     return planetsReturned;
// }

});