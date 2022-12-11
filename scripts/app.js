//  submitButton.addEventListener('click', async () => {

//  });



function mountainTemplate(mountain) {
  let mySunrise = getSunsetForMountain(`${mountain.coords.lat},${mountain.coords.lng}`);
   let id = mountain.name.replace(" ", "").replace(".","")
   return `
     <div id = "${id}" class="mountain">
     <img class="mountain-photo" src="images/${mountain.img}">
     <h2 class="mountain-name">${mountain.name} <span class="species">(${mountain.elevation} feet)</span></h2>
     <h4 class="mountain-desc">${mountain.desc} </h4>
     <p><strong>Effort:</strong> ${mountain.effort}</p>
     <strong>Coordinates:</strong> lat: ${mountain.coords.lat} lng: ${mountain.coords.lng}

     </div>
     `;
 }
 //      <strong>Sunrise:</strong> ${mySunrise} line 17
 document.getElementById("mountains").innerHTML = `
   <h1 class="app-title"> ${mountainsArray.length} Mountains documented!</h1>
   ${mountainsArray.map(mountainTemplate).join("")}
   <p class="footer">These ${mountainsArray.length} mountants were added recently. Check back soon for updates.</p>
 `;  
 
 async function getSunsetForMountain(lat, lng){
   //let response = await fetch(
   // `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
   //let data = await response.json();
   //return data;
   }
 
   
     
  function loadData() {
      var down = document.getElementById('mountain');
             for (let i = 0; i < mountainsArray.length; i++) {
                 var optn = mountainsArray[i];
                 var el = document.createElement("option");
                 el.textContent = optn;
                 el.value = optn;
                 down.appendChild(el);
             }
             down.innerHTML = "Elements Added";
         }
 
        
 
 
 // Get dropdown element from DOMttt
 var dropdown = document.getElementById("selectMountain");
 
 // Loop through the array
 for (var i = 0; i < mountainsArray.length; ++i) {
  // Append the element to the end of Array list
  dropdown[dropdown.length] = new Option(mountainsArray[i].name);
}
 
 function listMountain() {
  let dropValue = document.getElementById("selectMountain").value;
  let id = dropValue.replace(" ", "").replace(".","")
  document.getElementById(id).scrollIntoView()
 }
 


 