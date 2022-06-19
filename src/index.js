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
function logIn() {
  debugger;
  let mail = document.getElementById('mailInput').value;
  let pswd = document.getElementById('passwordInput').value;
  if (mail == 'manager@gmail.com' && pswd == '123') {
      // window.location.assign('Actions.html')
      if(window.confirm("welcome"))
          {window.location.href='Manager.html'}   
  }
  else {window.location.href='User.html'}   
};
