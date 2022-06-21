const logIn = () => {
  debugger;
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
        if (users.find(u=> u.email == mail)!=null)
          window.location.href = "src/User.html";
      }
    }
  };
};



// function directMyDetails(user) {
//   debugger;
//   const nameContainer = document.querySelector(".userName");
//   nameContainer.innerHTML += user.firstName + " " + user.lastName;
//   const detailsContainer = document.querySelector(".userDetails");
//   detailsContainer.innerHTML += `
//   <p>${"id: " + user.id}</p>
//   <p> ${"mail: " + user.email}</p>
//   <p>${"address: " + user.address.city + ' ' + user.address.street + ' ' + user.address.building}</p>
//   <p>${"start weight: " + user.weights.startWeight}</p>
//   <p> weights per meetings: </p>+`
//   const weighs = user.weights.meetings;
//   weighs.foreach(weight => {
//     detailsContainer.innerHTML +=
//       `<p>${user.weights.meetings.date + " : " + user.weights.meetings.weight}</p>`
//   })

//   window.location.assign("Details.html")
// }
// const getUsersForManager = () => {
//   debugger;
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "./db.json");
//   xhr.send();
//   xhr.onload = () => {
//     if (xhr.status != 200) {
//       alert(`Error ${xhr.status}: ${xhr.statusText}`);
//     }
//     else {
//       let users = JSON.parse(xhr.responseText).users;
//       console.log(users)
//       let table = '';
//       const bmi = (users.weight * users.height) ^ 2
//       let color;
//       let green;
//       let red;
//       if (bmi < 50)
//         color = green;
//       else color = red
//       users.forEach(user => {
//         table += `
//          <tr>
//         <th>${user.firstName + " " + user.lastName}</th>
//         <th class=${color}>${"BMI : " + bmi}</th>
//         </tr>
//         <button onclick="directMyDetails({user})"> details</button>
//         <br/>
//         `
//         // <button {onclick="directMyDetails(${user})"}>details</button>
//         // <button {onclick="directMyDetails(${user})"}>details</button>
//       })
//       const container = document.querySelector(".usersTable");
//       container.innerHTML += table;
//     }
//   };
// };
// function userDetails() {
//   debugger;
//   var myData = localStorage['cu'];
//   localStorage.clear();

//   var value1 = JSON.parse(myData).firstName
//   var value2 = JSON.parse(myData).lastName
//   var value3 = JSON.parse(myData).email
//   var value5 = JSON.parse(myData).address.city
//   var value6 = JSON.parse(myData).address.street
//   var value7 = JSON.parse(myData).address.building
//   var value8 = JSON.parse(myData).age
//   var value9= JSON.parse(myData).height
//   var value10=JSON.parse(myData).Weights.startWeight
//   var meet=JSON.parse(myData).Weights.meetings
//   console.log(meet)
//   meet.forEach(m=>{
//     document.getElementById("meeting").innerHTML+= "                          "

//     document.getElementById("meeting").innerHTML+= '     date:         '+  m.date
//     document.getElementById("meeting").innerHTML+= "                          "
//     document.getElementById("meeting").innerHTML+='      weight:        '+m.weight
//     document.getElementById("meeting").innerHTML+=`</br>`

//   })
// //  JSON.parse(myData).meetings.forEach(x=> document.getElementById("meeting").innerHTML+=x.weighs.meetings.date)
//   document.getElementById("user").innerHTML+=value1
//   document.getElementById("name").innerHTML=value1+' '+value2
//   document.getElementById("email").innerHTML =value3
//   document.getElementById("height&age").innerHTML=value8+' '+value9
//   document.getElementById("address").innerHTML=value6+' '+value7+' '+value5;
//   document.getElementById("StartingWeight").innerHTML=value10
// }



function directMyDetails(user){
  const nameContainer = document.querySelector(".userName");
  nameContainer.innerHTML += user.firstName+" "+user.lastName;
  const detailsContainer = document.querySelector(".userDetails");
  detailsContainer.innerHTML +=`
  <p>${"id: "+user.id}</p>
  <p> ${"mail: "+user.email}</p>
  <p>${"address: "+user.address.city+' '+user.address.street+' '+user.address.building}</p>
  <p>${"start wheight: "+user.wheights.startWheight}</p>
  <p> wheights per meetings: </p>+`
  const wheighs=user.wheights.meetings;
  wheighs.foreach(wheight=>{
    detailsContainer.innerHTML +=
    `<p>${user.wheights.meetings.date+" : "+user.wheights.meetings.wheight}</p>`
  })
  
  window.location.assign("src/Details.html") 
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
      users = JSON.parse(xhr.responseText).users;
      console.log(users);
      let tablle = "";
      const bmi=(user.wheight*user.height)^2
      let color;
      if(bmi<50)
        color=green;
      else color =red
      users.foreach((user) => {
        table += `
      <tr>
      <th>${user.firstName + " " + user.lastName}</th>
      <th class=${color}>${"BMI : "+bmi}</th>
      <th onclick="directMyDetails(${user})">details</th>
      </tr>
      `;
      });
      const container = document.querySelector(".usersTable");
      container.innerHTML += table;
    }
  };
};
