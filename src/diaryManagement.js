function getDiaryForCurrentuser() {
  debugger;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  //   alert("user id: " + id);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../db-1655750686617.json");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${managerXHR.statusText}`);
    } else {
      let users = JSON.parse(xhr.response).users;
      let diary;
      for (let index = 0; index < users.length; index++) {
        debugger;
        if (users[index].id == id) {
          diary = users[index].diary;
          break;
        }
      }
      diary.forEach((item) => {
        debugger;
        document.getElementById("diary").innerHTML += `<p>date: ${item.date}</p>
            <p>summary: ${item.summary}</p>`;
      });
    }
  };
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
