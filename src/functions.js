let start = 0;
function getParams() {
  debugger;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../db-1655750686617.json");
  xhr.send();
  xhr.onload = () => {
    let users = JSON.parse(xhr.responseText).users;
    CurrentUser = users.find((u) => u.id == id);
    document.getElementById(
      "userDetails"
    ).innerHTML += `<h1>${CurrentUser.firstName} details</h1>`;
    document.getElementById(
      "userDetails"
    ).innerHTML += `<h4>firstName: ${CurrentUser.firstName}</h4> 
      <h4>lastName: ${CurrentUser.lastName}</h4>
      <h4>email: ${CurrentUser.email}</h4>
    <h4>address : </h4>
      ${CurrentUser.address.street}
      ${CurrentUser.address.building}
      ${CurrentUser.address.city}
      <h4>age: ${CurrentUser.age}</h4> 
      <h4>height: ${CurrentUser.height}</h4>
      <h4>start Weight: ${CurrentUser.Wheights.startWheight}</h4> 
    <h2>meetings:</h2>`;
    const meet = CurrentUser.Wheights.meetings;
    let table = `<table>
    <tr>
    <th>Date  </th>
    <th>Weight  </th>
    </tr></br>`;
    meet.forEach((m) => {
      table += `<tr>
         <td>${m.date + "   "}</td>
        <td>${m.wheight}</td>
        </tr></br>`;
    });
    table += `</table>`;
    document.getElementById("userDetails").innerHTML += table;
  };
}
const getUsersForManager = () => {
  if (start == 0) {
    debugger;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../db-1655750686617.json");
    xhr.send();
    xhr.onload = () => {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        let jsonusers = JSON.parse(xhr.responseText).users;
        let userMeetings = JSON.parse(xhr.responseText).users[0].Wheights
          .meetings;
        numOfmeetings = Object.keys(userMeetings).length;
        console.log(jsonusers);
        let cities = [];
        let ind = 0;
        jsonusers.forEach((u, i) => {
          debugger;
          let CITY = JSON.stringify(u.address.city).replace(/"/g, "");
          // alert(`${i} -> ${CITY}`);
          let found = cities.indexOf(CITY) > -1;
          if (!found) {
            cities[ind] = CITY;
            ind += 1;
          }
        });
        const city = document.getElementById("citySelect");
        const street = document.getElementById("streetSelect");
        let index = 0;
        cities.forEach((c, i) => {
          debugger;
          // alert(`${i} -> ${c}`);
          city.options[i] = new Option(c, i);
          jsonusers.forEach((j, ind) => {
            debugger;
            if (j.address.city == c) {
              debugger;
              let STREET = JSON.stringify(j.address.street).replace(/"/g, "");
              street.options[index] = new Option(STREET, ind);
              index += 1;
            }
          });
        });
        document.getElementById("allUsers").innerHTML = "";
        // document
        //   .getElementById("allUsers")
        //   .append(
            showUsers(jsonusers, numOfmeetings)
            // );
      }
    };
    start += 1;
  }
};
function showUsers(jsonusers, numOfmeetings) {
  // var container = document.createElement("div");
  // container.id="container"
  let i = 0;
  let bmi;
  jsonusers.forEach((user) => {
    debugger;
    bmi =
      user.Wheights.meetings[numOfmeetings - 1].wheight /
      (user.height * user.height);
    lastBmi =
      user.Wheights.meetings[numOfmeetings - 2].wheight /
      (user.height * user.height);

    const para = document.createElement("p");
    const buttons = document.createElement("button");
    buttons.innerText = "details";
    buttons.id = "b" + i;
    buttons.className = "btn btn-outline-info";

    i = i + 1;
    if (bmi < lastBmi) para.style.color = "green";
    else para.style.color = "red";
    document.getElementById("allUsers").innerHTML += `<h3>${user.firstName + " " + user.lastName}`;
    // container.append(`${user.firstName + " " + user.lastName}`);
    para.innerHTML = "CURRENT BMI : " + bmi;
    document.getElementById("allUsers").appendChild(para);
    // document.getElementById("allUsers").innerHTML += "START BMI : " + (user.Wheights.startWheight / (user.height * user.height)) + `</br>`
    document.getElementById("allUsers").appendChild(buttons);
    // container.appendChild(para);
    // container.appendChild(buttons);
  });
  i = 0;
  jsonusers.forEach((user) => {
    debugger;
    var elem = document.getElementById("b" + i);
    i = i + 1;
    elem.addEventListener(
      "click",
      function () {
        directMyDetails(user);
      },
      false
    );
  });

  start = 2;
  // return container;
}
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
  var value10 = JSON.parse(myData).Wheights.startWheight;
  var meet = JSON.parse(myData).Wheights.meetings;
  console.log(meet);
  meet.forEach((m) => {
    document.getElementById("meeting").innerHTML +=
      "     date:         " + m.date;
    document.getElementById("meeting").innerHTML +=
      "                          ";
    document.getElementById("meeting").innerHTML +=
      "      weight:        " + m.wheight;
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
function directMyDetails(user) {
  debugger;
  window.location.href = `Details.html?id=${user.id}`;
}
function filterUsers() {
  debugger;
  const text = document.getElementById("searchByFreeTextInput").value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../db-1655750686617.json");
  xhr.send();
  xhr.onloadend = () => {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      // alert(JSON.parse(xhr.responseText));
      let users = JSON.parse(xhr.responseText).users;
      let filteredUsers = users.filter((u) => {
        return (
          u.firstName.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
          u.lastName.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
          u.address.street.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
          u.address.city.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
          u.email.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
          u.id.toString().indexOf(text) > -1 ||
          u.age.toString().indexOf(text) > -1 ||
          u.height.toString().indexOf(text) > -1
        );
      });
      let userMeetings = JSON.parse(xhr.responseText).users[0].Wheights
        .meetings;
      numOfmeetings = Object.keys(userMeetings).length;
      document.getElementById("allUsers").innerHTML = "";
      // document
      //   .getElementById("allUsers")
      //   .append(
          showUsers(filteredUsers, numOfmeetings)
          // );
    }
  };
}
// window.onload=getUsersForManager();
