let start = 0;
const configUrl="../db-1655750686617.json";
function getParams() {
  debugger;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const xhr = new XMLHttpRequest();
  xhr.open("GET",configUrl );
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
      <h4>start Weight: ${CurrentUser.Weights.startWeight}</h4> 
    <h2>meetings:</h2>`;
    const meet = CurrentUser.Weights.meetings;
    // let table=document.createElement("table")
    // let title=document.createElement("tr");
    // let subject1=document.createElement("td");
    // subject1.innerText="Date";
    // title.appendChild(subject1);
    // let subject2=document.createElement("td");
    // subject2.innerText="Weight"
    // title.appendChild(subject2);
    // table.append(title);
    let table = `<table>
    <tr>
    <th>Date  </th>
    <th>Weight  </th>
    </tr></br>`;
    table.id = "userMeetingsTable";
    meet.forEach((m) => {
      table += `<tr>
         <td>${m.date + "   "}</td>
        <td>${m.weight}</td>
        </tr></br>`;
      // let tr=document.createElement("tr");
      // let td1=document.createElement("td");
      // td1.innerText=m.date + "   ";
      // tr.appendChild(td1);
      // let td2=document.createElement("td");
      // td2.innerText=m.weight;
      // tr.appendChild(td2);
      // table.append(tr);
    });
    table += `</table>`;
    document.getElementById("userDetails").innerHTML += table;
  };
}
function getUsersForManager () {
  if (start == 0) {
    debugger;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", configUrl);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        let jsonusers = JSON.parse(xhr.responseText).users;
        let userMeetings = JSON.parse(xhr.responseText).users[0].Weights
          .meetings;
        numOfmeetings = Object.keys(userMeetings).length;
        console.log(jsonusers);
        let cities = [];
        let ind = 0;
        jsonusers.forEach((u,i) => {
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
        let index = 1;
        city.options[0] = new Option("city",0);
        street.options[0] = new Option("street",0);
        cities.forEach((c, i) => {
          debugger;
          // alert(`${i} -> ${c}`);
          city.options[i+1] = new Option(c, i+1);
          jsonusers.forEach((j, ind) => {
            debugger;
            if (j.address.city == c) {
              debugger;
              let STREET = JSON.stringify(j.address.street).replace(/"/g, "");
              street.options[index] = new Option(STREET, index);
              index += 1;
            }
          });
        });
        start += 1;
        document.getElementById("allUsers").innerHTML = "";
        // document
        //   .getElementById("allUsers")
        //   .append(
        showUsers(jsonusers, numOfmeetings);
        // );
      }
    };
  }
};
function showUsers(jsonusers, numOfmeetings) {
  debugger;
  // let container = document.createElement("div");
  // container.id="container"
  let i = 0;
  let bmi;
  if (jsonusers == [])
    document.getElementById("allUsers").innerHTML += <p>no suitable users found</p>;
  jsonusers?.forEach((user) => {
    debugger;
    bmi =
      user.Weights.meetings[numOfmeetings - 1].weight /
      (user.height **2);
    lastBmi =
      user.Weights.meetings[numOfmeetings - 2].weight /
      (user.height **2);
    let containerUser=document.createElement("div");
    // containerUser.id="containerUser";
    containerUser.innerHTML="";
    const para = document.createElement("p");
    const buttons = document.createElement("button");
    const txt = document.createElement("txt");
    txt.id="textForUser";
    buttons.innerText = "details";
    buttons.id = "b" + i;
    buttons.className = "btn btn-outline-info";

    i = i + 1;
    if (bmi < lastBmi) para.style.color = "green";
    else para.style.color = "red";
    txt.innerHTML=`<h3>${
      user.firstName + " " + user.lastName}</h3>`;
    // container.append(`${user.firstName + " " + user.lastName}`);
    para.innerHTML = "CURRENT BMI : " + bmi;
    containerUser.appendChild(txt);
    containerUser.appendChild(para);
    // document.getElementById("allUsers").innerHTML += "START BMI : " + (user.Weights.startWeight / (user.height * user.height)) + `</br>`
    containerUser.appendChild(buttons);
    let allUsers=document.getElementById("allUsers");
    allUsers.appendChild(containerUser);
  });
  i = 0;
  jsonusers?.forEach((user) => {
    debugger;
    let elem = document.getElementById("b" + i);
    i = i + 1;
    elem.addEventListener(
      "click",
      function () {
        directMyDetails(user);
      },
      false
    );
  });
  start +=1;
  // return container;
}
function directMyDetails(user) {
  debugger;
  window.location.href = `Details.html?id=${user.id}`;
}
function filterUsers() {
  debugger;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", configUrl);
  xhr.send();
  xhr.onloadend = () => {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      // alert(JSON.parse(xhr.responseText));
      const text = document.getElementById("searchByFreeTextInput").value;
      const biggerThanWeight =
        document.getElementById("biggerThanWeight").value;
      const lowerThanWeight = document.getElementById("lowerThanWeight").value;
      const lostOrGained = document.getElementById("select_lost/gained").value;
      const from = document.getElementById("select_from").value;
      const lowerThanBMI = document.getElementById("lowerThanBMI").value;
      const biggerThanBMI = document.getElementById("biggerThanBMI").value;
      const s = document.getElementById("streetSelect")
      const streetSelect=s.options[s.selectedIndex].outerText;
      const  c= document.getElementById("citySelect")
      const citySelect=c.options[c.selectedIndex].outerText;
      let users = JSON.parse(xhr.responseText).users;
      let userMeetings = JSON.parse(xhr.responseText).users[0].Weights
        .meetings;
      numOfmeetings = Object.keys(userMeetings).length;
      if (text != "") {
        users = filterByText(users, text);
      }
      if (biggerThanWeight != "" || lowerThanWeight != "") {
        if (biggerThanWeight == "") biggerThanWeight = 0;
        if (lowerThanWeight == "") lowerThanWeight = 200;
        users = filterByWeight(users, biggerThanWeight, lowerThanWeight);
      }
      if (lostOrGained != "lost/gained" && from != "from") {
        users = filterByGainedOrLost(users, lostOrGained, from, numOfmeetings);
      }
      if (lowerThanBMI != "" || biggerThanBMI != "") {
        if (lowerThanBMI == "") lowerThanBMI = 200;
        if (biggerThanBMI == "") biggerThanBMI = 0;
        users = filterByBMI(users, biggerThanBMI, lowerThanBMI, numOfmeetings);
      }
      if (streetSelect != "street" || citySelect != "city") {
        users = filterByAddress(users, citySelect, streetSelect);
      }

      document.getElementById("allUsers").innerHTML = "";
      // document
      //   .getElementById("allUsers")
      //   .append(
      showUsers(users, numOfmeetings);
      // );
    }
  };
}
function filterByText(users, text) {
  users = users.filter((u) => {
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
  return users;
}
function filterByWeight(users, biggerThanWeight, lowerThanWeight) {
  users = users.filter((u) => {
    return (
      u.Weights.meetings[numOfmeetings - 1].weight > biggerThanWeight &&
      u.Weights.meetings[numOfmeetings - 1].weight < lowerThanWeight
    );
  });
  return users;
}
function filterByGainedOrLost(users, lostOrGained, from, numOfmeetings) {
  if (lostOrGained == "lost_weight") {
    if (from == "from_the_last_week") {
      users = users.filter((u) => {
        return (
          u.Weights.meetings[numOfmeetings - 1].weight <
          u.Weights.meetings[numOfmeetings - 2].weight
        );
      });
    } else {
      users = users.filter((u) => {
        return (
          u.Weights.meetings[numOfmeetings - 1].weight <
          u.Weights.startWeight
        );
      });
    }
  } else {
    if (from == "from_the_last_week") {
      users = users.filter((u) => {
        return (
          u.Weights.meetings[numOfmeetings - 1].weight >
          u.Weights.meetings[numOfmeetings - 2].weight
        );
      });
    } else {
      users = users.filter((u) => {
        return (
          u.Weights.meetings[numOfmeetings - 1].weight >
          u.Weights.startWeight
        );
      });
    }
  }
  return users;
}
function filterByBMI(users, biggerThanBMI, lowerThanBMI, numOfmeetings) {
  let bmi;
  users = users.filter((u) => {
    bmi =
      u.Weights.meetings[numOfmeetings - 1].weight / (u.height * u.height);
    return bmi < lowerThanBMI && bmi > biggerThanBMI;
  });
  return users;
}
function filterByAddress(users, citySelect, streetSelect) {
  users=users.filter((u)=>{
    return(
      u.address.city==citySelect
    );
  })
  if(streetSelect!="street"){
    users=users.filter((u)=>{
      return(
        u.address.street==streetSelect
      );
    })
  }
  return users;
}

function newMeeting(){

}
// window.onload=getUsersForManager();

function directToMeetings(){
  debugger;
  window.location.href = `Meetings.html`;
}

