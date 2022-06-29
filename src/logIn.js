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
        CurrentUser = users.find((u) => u.email == mail && u.id == pswd);
        if (CurrentUser != null) {
          localStorage.setItem("cu", JSON.stringify(CurrentUser));
          window.location.href = `src/User.html?userId=${CurrentUser.id}`;
        } else alert("user not found");
      }
    }
  };
};