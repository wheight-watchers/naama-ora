const logIn = () => {
  debugger;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./db.json");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${managerXHR.statusText}`);
    } else {
      let manager = JSON.parse(xhr.response).manager;
      console.log(manager);
      let mail = document.getElementById("mailInput").value;
      let pswd = document.getElementById("passwordInput").value;
      if (mail == manager.email && pswd == manager.id) {
        if (window.confirm("welcome")) {
           {window.location.href='Manager.html'}  
        
        }
      } else {
        let users = JSON.parse(xhr.responseText).users;
        console.log(users);
        if (users.find((u) => u.email == mail))
          window.location.href = "User.html";
      }
    }
  };
};
function directMyDetails(user) {
  const nameContainer = document.querySelector(".userName");
  nameContainer.innerHTML += user.firstName + " " + user.lastName;
  const detailsContainer = document.querySelector(".userDetails");
  detailsContainer.innerHTML += `
  <p>${"id: " + user.id}</p>
  <p> ${"mail: " + user.email}</p>
  <p>${"address: " + user.address.city + ' ' + user.address.street + ' ' + user.address.building}</p>
  <p>${"start weight: " + user.weights.startWeight}</p>
  <p> weights per meetings: </p>+`
  const weighs = user.weights.meetings;
  weighs.foreach(weight => {
    detailsContainer.innerHTML +=
      `<p>${user.weights.meetings.date + " : " + user.weights.meetings.weight}</p>`
  })

  window.location.assign("Details.html")
}
const getUsersForManager = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./db.json");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status != 200) {
      alert("Error ${xhr.status}: ${xhr.statusText}");
    } else {
      users = JSON.parse(XHR.responseText).users;
      console.log(users);
      let tablle = "";
      const bmi = (user.weight * uer.height) ^ 2
      let color;
      if (bmi < 50)
        color = green;
      else color = red
      users.foreach((user) => {
        table += `
      <tr>
      <th>${user.firstName + " " + user.lastName}</th>
      <th class=${color}>${"BMI : " + bmi}</th>
      <th onclick="directMyDetails(${user})">details</th>
      </tr>
      `;
      });
      const container = document.querySelector(".usersTable");
      container.innerHTML += table;
    }
  };
};
