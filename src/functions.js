let CurrentUser;
const logIn = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./db-1655750686617.json");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${managerXHR.statusText}`);
    } else {
      let manager = JSON.parse(xhr.response).manager;
      console.log(manager);
      let mail = document.getElementById("mailInput").value;
      let pswd = document.getElementById("passwordInput").value;
      if (mail == manager.email && pswd == manager.password) {
        if (window.confirm("welcome")) {
          window.location.href = "src/Manager.html";
        }
      } else {
        let users = JSON.parse(xhr.responseText).users;
        console.log(users);
        CurrentUser = users.find((u) => u.email == mail);
        if (CurrentUser != null) {
          localStorage.setItem("cu", JSON.stringify(CurrentUser));
          window.location.href = "src/User.html";
        }
      }
    }
  };
};

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
    document.getElementById("userDetails").innerHTML +=
      `<h4>firstName: ${CurrentUser.firstName}</h4> 
      <h4>lastName: ${CurrentUser.lastName}</h4>
      <h4>email: ${CurrentUser.email}</h4>
    <h4>address : </h4>
      ${CurrentUser.address.street}
      ${CurrentUser.address.building}
      ${CurrentUser.address.city}
      <h4>age: ${CurrentUser.age}</h4> 
      <h4>height: ${CurrentUser.height}</h4>
      <h4>start Weight: ${CurrentUser.Wheights.startWheight }</h4> 
    <h2>meetings:</h2>`
    const meet = CurrentUser.Wheights.meetings;
    let table=`<table>
    <tr>
    <th>Date</th>
    <th>Weight</th>
    </tr></br>`;
    meet.forEach((m) => {
      table+=
      `<tr>
         <td>${m.date}</td>
        <td>${m.wheight}</td>
        </tr></br>`
    });
    
    table+=`</table>`
    document.getElementById("userDetails").innerHTML +=table;
  };
}

const getUsersForManager = () => {
  debugger;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../db-1655750686617.json");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status != 200) {
      alert("Error ${xhr.status}: ${xhr.statusText}");
    } else {
      let users = JSON.parse(xhr.responseText).users;
      let userMeetings=JSON.parse(xhr.responseText).users[0].Wheights.meetings;
      console.log(users);
      let i = 0;
      let bmi;
      users.forEach((user) => {
        debugger;
        bmi = user.Wheights.meetings[Object.keys(userMeetings).length-1].wheight / (user.height * user.height);
        lastBmi =user.Wheights.meetings[Object.keys(userMeetings).length-2].wheight / (user.height * user.height);
        const para = document.createElement("p");
        const buttons = document.createElement("button");
        buttons.innerText = "details";
        buttons.id = "b" + i;
        buttons.className="btn btn-outline-info"
        
        i = i + 1;
        if (bmi < lastBmi) para.style.color = "green";
        else para.style.color = "red";
        document.getElementById("allUsers").innerHTML += `<h3>${
          user.firstName + " " + user.lastName
        }</h3>`;
        para.innerHTML = "CURRENT BMI : " + bmi;
        document.getElementById("allUsers").appendChild(para);
        // document.getElementById("allUsers").innerHTML += "START BMI : " + (user.Wheights.startWheight / (user.height * user.height)) + `</br>`
        document.getElementById("allUsers").appendChild(buttons);
      });
      i = 0;
      users.forEach((user) => {
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
    }
  };
};

function userDetails() {
  debugger;
  var myData = localStorage["cu"];
  localStorage.clear();
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
      "                          ";

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
