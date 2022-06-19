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
function reqListener() {
  console.log(this.responseText);
}
function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not)."
  );
}
function logIn() {
  debugger;
  let mail = document.getElementById("mailInput").value;
  let pswd = document.getElementById("passwordInput").value;
  if (mail == "manager@gmail.com" && pswd == "123") {
    if (window.confirm("welcome")) {
      window.location.assign("Manager.html");
      window.location.href = "Manager.html";
    }
  } else {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", reqListener);
    xhr.open("GET", "file.json/users?id=1");
    xhr.addEventListener("loadend", loadEnd);
    xhr.send();
    if (mail == "manager@gmail.com" && pswd == "123") {
      window.location.assign("User.html");
      window.location.href = "User.html";
    }
  }
}
function getUsersFormanager() {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", reqListener);
  xhr.open("GET", "file.json");
  xhr.addEventListener("loadend", loadEnd);
  xhr.send();
}
function request() {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "file.json"
  );

  try {
    xhr.send();
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      alert(xhr.response);
    }
  } catch (err) {
    // instead of onerror
    alert("Request failed");
  }
}
request();
