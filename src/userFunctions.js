async function getUsers() {
  let url = "../db-1655750686617.json";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    alert(error);
  }
}
async function userDetails() {
  debugger;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  debugger;
  let users = await getUsers().then((res)=>{return res.users});
  const CurrentUser = users.find((u) => u.id == id);
  // alert(CurrentUser);
  let value1 = CurrentUser.firstName;
  let value2 = CurrentUser.lastName;
  let value3 = CurrentUser.email;
  let value5 = CurrentUser.address.city;
  let value6 = CurrentUser.address.street;
  let value7 = CurrentUser.address.building;
  let value8 = CurrentUser.age;
  let value9 = CurrentUser.height;
  let value10 = CurrentUser.Weights.startWeight;
  let meet = CurrentUser.Weights.meetings;
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
async function edit() {
  debugger;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  // const res = await fetch("../db-1655750686617.json");
  const res = await fetch("../db-1655750686617.json");
  const users = await res.json();
  CurrentUser = users.find((u) => u.id == id);
  // let myData = localStorage["cu"];
  // localStorage.clear();
  let value1 = CurrentUser.firstName;
  let value2 = CurrentUser.lastName;
  let value3 = CurrentUser.email;
  let value5 = CurrentUser.address.city;
  let value6 = CurrentUser.address.street;
  let value7 = CurrentUser.address.building;
  let value8 = CurrentUser.age;
  let value9 = CurrentUser.height;

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
async function saveYourDetails() {
  debugger;
  //let myData = localStorage["cu"];
  //let id = JSON.parse(myData).id;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  const res = await fetch("../db-1655750686617.json");
  const users = await res.json();
  CurrentUser = users.find((u) => u.id == id);
  let firstName = document.getElementById("nameInput").value;
  let lastName = document.getElementById("lastNameInput").value;
  let email = document.getElementById("emailInput").value;
  let city = document.getElementById("addressCityInput");
  let street = document.getElementById("addressStreetInput").value;
  let building = document.getElementById("addressBuildingInput").value;
  let age = document.getElementById("ageInput").value;
  let height = document.getElementById("heightInput").value;

  alert("your detail update in variable:(");

  window.location.href = "User.html";
  // let myData = localStorage["cu"];
  // // localStorage.clear();
  // let value1 = JSON.parse(myData).firstName;
  // let value2 = JSON.parse(myData).lastName;
  // let value3 = JSON.parse(myData).email;
  // let value5 = JSON.parse(myData).address.city;
  // let value6 = JSON.parse(myData).address.street;
  // let value7 = JSON.parse(myData).address.building;
  // let value8 = JSON.parse(myData).age;
  // let value9 = JSON.parse(myData).height;
  // let value10 = JSON.parse(myData).Weights.startWeight;
  // let meet = JSON.parse(myData).Weights.meetings;
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
//   let myData = localStorage["cu"];
//   // localStorage.clear();
//   let value1 = JSON.parse(myData).firstName;
//   let value2 = JSON.parse(myData).lastName;
//   let value3 = JSON.parse(myData).email;
//   let value5 = JSON.parse(myData).address.city;
//   let value6 = JSON.parse(myData).address.street;
//   let value7 = JSON.parse(myData).address.building;
//   let value8 = JSON.parse(myData).age;
//   let value9 = JSON.parse(myData).height;

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
