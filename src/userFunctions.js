function userDetails() {
  debugger;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  // const xhr = new XMLHttpRequest();
  // xhr.open("GET", "../db-1655750686617.json");
  // xhr.send();
  const res = await fetch("../db-1655750686617.json");
  const users = await res.json();
  CurrentUser = users.find((u) => u.id == id);
  // xhr.onload = () => {
  //   let users = JSON.parse(xhr.responseText).users;
    // var myData = localStorage["cu"];
    // localStorage.clear();
    var value3 = CurrentUser.email;
    var value1 = CurrentUser.firstName;
    var value2 = CurrentUser.lastName;
    var value5 = CurrentUser.address.city;
    var value1 = CurrentUser.firstName;
    var value6 = CurrentUser.address.street;
    var value7 = CurrentUser.address.building;
    var value8 = CurrentUser.age;
    var value9 = CurrentUser.height;
    var value10 = CurrentUser.Weights.startWeight;
    var meet = CurrentUser.Weights.meetings;
    // console.log(meet);
    meet.forEach((m) => {
      debugger;

      document.getElementById(
        "meeting"
      ).innerHTML += `<h4>date:     </h4><h5>${m.date}</h5>`;
      document.getElementById(
        "meeting"
      ).innerHTML += `<h4>weight:      </h4><h5>${m.weight}</h5>`;
      document.getElementById("meeting").innerHTML += "--------";
    });

    document.getElementById("user").innerHTML += value1;
    document.getElementById("name").innerHTML += value1 + " " + value2;
    document.getElementById("email").innerHTML += value3;
    document.getElementById("age&height").innerHTML += `<h4>${
      value8 +
      "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
      value9
    }</h4>`;
    document.getElementById("address").innerHTML +=
      value6 + " " + value7 + " , " + value5;
    document.getElementById("StartingWeight").innerHTML +=
      "\xa0\xa0\xa0" + value10;
  // };
  getDiaryForCurrentuser();
}
function directToEditdetails() {
  window.location.href = "editUser.html";
  debugger;
}
function directToProducts() {
  debugger;
  window.location.href = "src/Product.html";
}
function edit() {
  debugger;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  const res = await fetch("../db-1655750686617.json");
  const users = await res.json();
  CurrentUser = users.find((u) => u.id == id);
  // var myData = localStorage["cu"];
  // localStorage.clear();
  var value1 = CurrentUser.firstName;
  var value2 = CurrentUser.lastName;
  var value3 = CurrentUser.email;
  var value5 = CurrentUser.address.city;
  var value6 = CurrentUser.address.street;
  var value7 = CurrentUser.address.building;
  var value8 = CurrentUser.age;
  var value9 = CurrentUser.height;

  document.getElementById("name").nameInput += "hello " + value1;
  document.getElementById("nameInput").value = value1;
  document.getElementById("lastNameInput").value = value2;
  document.getElementById("emailInput").value = value3;
  document.getElementById("addressCityInput").value = value5;
  document.getElementById("addressStreetInput").value = value6;
  document.getElementById("addressBuildingInput").value = value7;
  document.getElementById("ageInput").value = value8;
  document.getElementById("heightInput").value = value9;
}
function saveYourDetails() {
  debugger;
  // var myData = localStorage["cu"];
  // var id = JSON.parse(myData).id;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  const res = await fetch("../db-1655750686617.json");
  const users = await res.json();
  CurrentUser = users.find((u) => u.id == id);
  var firstName = document.getElementById("nameInput").value;
  var lastName = document.getElementById("lastNameInput").value;
  var email = document.getElementById("emailInput").value;
  var city = document.getElementById("addressCityInput");
  var street = document.getElementById("addressStreetInput").value;
  var building = document.getElementById("addressBuildingInput").value;
  var age = document.getElementById("ageInput").value;
  var height = document.getElementById("heightInput").value;

  alert("your detail update in variable:(");

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
// async function edit() {
//   debugger;
//   var myData = localStorage["cu"];
//   // localStorage.clear();
//   var value1 = JSON.parse(myData).firstName;
//   var value2 = JSON.parse(myData).lastName;
//   var value3 = JSON.parse(myData).email;
//   var value5 = JSON.parse(myData).address.city;
//   var value6 = JSON.parse(myData).address.street;
//   var value7 = JSON.parse(myData).address.building;
//   var value8 = JSON.parse(myData).age;
//   var value9 = JSON.parse(myData).height;

//   document.getElementById("name").nameInput += "hello " + value1;
//   document.getElementById("nameInput").value = value1;
//   document.getElementById("lastNameInput").value = value2;
//   document.getElementById("emailInput").value = value3;
//   document.getElementById("addressCityInput").value = value5;
//   document.getElementById("addressStreetInput").value = value6;
//   document.getElementById("addressBuildingInput").value = value7;
//   document.getElementById("ageInput").value = value8;
//   document.getElementById("heightInput").value = value9;
// }

// function directToDiaryManagement() {
//   debugger;
//   const params = new URLSearchParams(window.location.search);
//   const id = params.get("userId");
//   window.location.href = `diaryManagement.html?id=${id}`;
// }
