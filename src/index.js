// function doRequest() {
//   debugger;
//   let xhr = new XMLHttpRequest();
//   let url = new URL("https://google.com/search");
//   xhr.onload(() => alert("I'M ON LOADED"));
//   xhr.onprogress = function (event) {
//     if (event.lengthComputable) {
//       alert(`Received ${event.loaded} of ${event.total} bytes`);
//     } else {
//       alert(`Received ${event.loaded} bytes`); // no Content-Length
//     }
//   };
//   xhr.onerror = function () {
//     alert("Request failed");
//   };
//   xhr.open("GET", url);
//   xhr.send();
// }

// function reqListener() {
//   console.log(this.responseText);
// }
// function loadEnd(e) {
//   console.log(
//     "The transfer finished (although we don't know if it succeeded or not)."
//   );
// }
 function logIn() {
  debugger;
  // const initialization = async () => {
  // let url = "http://localhost:3000/manager";
  // const res = await fetch(url);
  // const manager = await res.json();

  // let table = '';
  // users.forEach(user => {
  //     table += `
  //     <tr>
  //         <th>${user.firstName + ' ' + user.lastName}</th>
  //         <th>${user.weight.historyWeight[users.length - 1] / Math.sqrt(user.hight)}</th>
  //         <th><a href="">details</a></th>
  //     </tr>`
  // })
  // const container = document.querySelector('.usersTable');
  // container.innerHTML += table;
  // }
  let res;
  debugger;
  let mail = document.getElementById("mailInput").value;
  let pswd = document.getElementById("passwordInput").value;
  let managerXHR = new XMLHttpRequest();
  managerXHR.onload = function () {
    debugger;

    if (managerXHR.status != 200) {
      alert(`Error ${managerXHR.status}: ${managerXHR.statusText}`);
    } else {
     
      let manag = JSON.parse(managerXHR.responseText);
        console.log(manag);
      
    }
  };
  managerXHR.open('GET', './db-1655750686617.json');
  managerXHR.send();
  // try {
  //   if (managerXHR.status != 200) {
  //     debugger;
  //     alert(`Error ${managerXHR.status}: ${managerXHR.statusText}`);
  //   } else {
  //     debugger;
  //     res = JSON.parse(managerXHR.responseText);
  //     // m = this.response;
  //     alert(managerXHR.response);
  //   }
  // } catch (err) {
  //   debugger;
  //   // instead of onerror
  //   alert("Request failed");
  // }
}

//   const manager = await res.json();
//   if (mail == manager && pswd == manager) {
//     if (window.confirm("welcome")) {
//       window.location.assign("Manager.html");
//       window.location.href = "Manager.html";
//     }
//   } else {
//     let xhr = new XMLHttpRequest();
//     // xhr.addEventListener("load", reqListener);
//     xhr.open("GET", "file.json/users");
//     // xhr.addEventListener("loadend", loadEnd);
//     xhr.send();
//     if (mail == xhr && pswd == "123") {
//       window.location.assign("User.html");
//       window.location.href = "User.html";
//     }
//   }
// }

// function getUsersFormanager() {
//   let xhr = new XMLHttpRequest();
//   xhr.addEventListener("load", reqListener);
//   xhr.open("GET", "file.json");
//   xhr.addEventListener("loadend", loadEnd);
//   xhr.send();
// }
// function request() {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", "file.json");

//   try {
//     xhr.send();
//     if (xhr.status != 200) {
//       alert(`Error ${xhr.status}: ${xhr.statusText}`);
//     } else {
//       alert(xhr.response);
//     }
//   } catch (err) {
//     // instead of onerror
//     alert("Request failed");
//   }
// }
// request();
