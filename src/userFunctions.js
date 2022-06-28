function userDetails() {
  debugger;
  var myData = localStorage["cu"];
  // localStorage.clear();
  var value1 = JSON.parse(myData).firstName;
  var value2 = JSON.parse(myData).lastName;
  var value3 = JSON.parse(myData).email;
  var value5 = JSON.parse(myData).address.city;
  var value6 = JSON.parse(myData).address.street;
  var value7 = JSON.parse(myData).address.building;
  var value8 = JSON.parse(myData).age;
  var value9 = JSON.parse(myData).height;
  var value10 = JSON.parse(myData).Weights.startWeight;
  var meet = JSON.parse(myData).Weights.meetings;
  console.log(meet);
  meet.forEach((m) => {
    debugger;
   
    document.getElementById("meeting").innerHTML +=
      "     date:         " + m.date;
    document.getElementById("meeting").innerHTML +=
      "                          ";
    document.getElementById("meeting").innerHTML +=
      "      weight:        " + m.weight;
    document.getElementById("meeting").innerHTML += `</br>`;
  });

  document.getElementById("user").innerHTML += value1;
  document.getElementById("name").innerHTML = value1 + " " + value2;
  document.getElementById("email").innerHTML = value3;
  document.getElementById("height").innerHTML = value9;
  document.getElementById("age").innerHTML = value8;
  document.getElementById("address").innerHTML =
    value6 + " " + value7 + " " + value5;
  document.getElementById("StartingWeight").innerHTML = value10;
}
function editdetails() {
  window.location.href = "editUser.html";
  debugger;
}
function edit() {
  debugger;
  var myData = localStorage["cu"];
  // localStorage.clear();
  var value1 = JSON.parse(myData).firstName;
  var value2 = JSON.parse(myData).lastName;
  var value3 = JSON.parse(myData).email;
  var value5 = JSON.parse(myData).address.city;
  var value6 = JSON.parse(myData).address.street;
  var value7 = JSON.parse(myData).address.building;
  var value8 = JSON.parse(myData).age;
  var value9 = JSON.parse(myData).height;

  document.getElementById("name").nameInput += "hello " + value1
  document.getElementById("nameInput").value = value1
  document.getElementById("lastNameInput").value = value2
  document.getElementById("emailInput").value = value3
  document.getElementById("addressCityInput").value = value5
  document.getElementById("addressStreetInput").value = value6
  document.getElementById("addressBuildingInput").value = value7
  document.getElementById("ageInput").value = value8
  document.getElementById("heightInput").value = value9


}
function saveYourDetails() {
  debugger
  var myData = localStorage["cu"];
  var id = JSON.parse(myData).id
  var firstName= document.getElementById("nameInput").value
  var lastName= document.getElementById("lastNameInput").value
  var email= document.getElementById("emailInput").value
  var city= document.getElementById("addressCityInput")
  var street=document.getElementById("addressStreetInput").value
  var building= document.getElementById("addressBuildingInput").value
  var age=document.getElementById("ageInput").value
  var height=document.getElementById("heightInput").value

  alert("your detail update in variable:(")

  window.location.href = "User.html";
    // var myData = localStorage["cu"];
    // // localStorage.clear();
    // var value1 = JSON.parse(myData).firstName;
    // var value2 = JSON.parse(myData).lastName;
    // var value3 = JSON.parse(myData).email;
    // var value5 = JSON.parse(myData).address.city;
    // var value6 = JSON.parse(myData).address.street;
    // var value7 = JSON.parse(myData).address.building;
    // var value8 = JSON.parse(myData).age;
    // var value9 = JSON.parse(myData).height;
    // var value10 = JSON.parse(myData).Weights.startWeight;
    // var meet = JSON.parse(myData).Weights.meetings;
    // console.log(meet);
    // meet.forEach((m) => {
    //   debugger;
    //   document.getElementById("meeting").innerHTML +=
    //     "     date:         " + m.date;
    //   document.getElementById("meeting").innerHTML +=
    //     "                          ";
    //   document.getElementById("meeting").innerHTML +=
    //     "      weight:        " + m.weight;
    //   document.getElementById("meeting").innerHTML += `</br>`;
    // });
  
    // document.getElementById("user").innerHTML += value1;
    // document.getElementById("name").innerHTML = value1 + " " + value2;
    // document.getElementById("email").innerHTML = value3;
    // document.getElementById("height").innerHTML = value9;
    // document.getElementById("age").innerHTML = value8;
    // document.getElementById("address").innerHTML =
    //   value6 + " " + value7 + " " + value5;
    // document.getElementById("StartingWeight").innerHTML = value10;
  }
  function editdetails(){
    window.location.href = "editUser.html";
    debugger;
  }
  async function edit(){
    debugger;
    var myData = localStorage["cu"];
    // localStorage.clear();
    var value1 = JSON.parse(myData).firstName;
    var value2 = JSON.parse(myData).lastName;
    var value3 = JSON.parse(myData).email;
    var value5 = JSON.parse(myData).address.city;
    var value6 = JSON.parse(myData).address.street;
    var value7 = JSON.parse(myData).address.building;
    var value8 = JSON.parse(myData).age;
    var value9 = JSON.parse(myData).height;

    document.getElementById("name").nameInput+= "hello "+value1
    document.getElementById("nameInput").value=value1
    document.getElementById("lastNameInput").value=value2
    document.getElementById("emailInput").value=value3
    document.getElementById("addressCityInput").value=value5
    document.getElementById("addressStreetInput").value=value6
    document.getElementById("addressBuildingInput").value=value7
    document.getElementById("ageInput").value=value8
    document.getElementById("heightInput").value=value9
    
}
function directToProducts(){
  debugger;
  window.location.href = 'src/Product.html';
  }
