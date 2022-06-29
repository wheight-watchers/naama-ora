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
      let table = `<table>
      <tr>
      <th>Date</th>
      <th>Breakfast</th>
      <th>Lunch</th>
      <th>Dinner</th>
      <th>Intermediate snack</th>
      </tr>
      `;
      diary.forEach((day) => {
        debugger;
        table += `<tr><th>${day.date}</th>`;
        // day.summary.forEach((meal)=>{
        let foods1 = "";
        day.summary[0].Breakfast.forEach((i, ind) => {
          debugger;
          foods1 += Object.byString(day.summary[0], `Breakfast[${ind}]`) + ", ";
        });
        table += `<td>${foods1}</td>`;
        let foods2 = "";
        day.summary[1].Lunch.forEach((i, ind) => {
          debugger;
          foods2 += Object.byString(day.summary[1], `Lunch[${ind}]`) + ", ";
        });
        table += `<td>${foods2}</td>`;
        let foods3 = "";
        day.summary[2].Dinner.forEach((i, ind) => {
          debugger;
          foods3 += Object.byString(day.summary[2], `Dinner[${ind}]`) + ", ";
        });
        table += `<td>${foods3}</td>`;
        let foods4 = "";
        day.summary[3].IntermediateSnack.forEach((i, ind) => {
          debugger;
          foods4 +=
            Object.byString(day.summary[3], `IntermediateSnack[${ind}]`) + ", ";
        });
        table += `<td>${foods4}</td>`;
        // meal.forEach((food)=>{
        //   foods+=food+", "
        // })
        // })
        debugger;
        table += `</tr>`;
      });
      table += `</table>`;
      document.getElementById("diary").innerHTML += table;
    }
  };
}
Object.byString = function (o, s) {
  debugger;
  s = s.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
  s = s.replace(/^\./, ""); // strip a leading dot
  let a = s.split(".");
  for (var i = 0, n = a.length; i < n; ++i) {
    let k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  debugger;
  const dateInput = document.getElementById("dateInput");
  dateInput.value = new Date().toLocaleDateString();
  modal.style.display = "block";
  // let body = document.getElementsByClassName("Breakfast_inputs");
  debugger;
  addInputForBreakfast();
  addInputForLunch();
  addInputForDinner();
  addInputForSnack();
};
//////////////////////////
numOfInputsForBreakfast = 0;
function addInputForBreakfast() {
  debugger;
  let lastNum=numOfInputsForBreakfast-1;
  let lastInput = document.getElementById("inputForBreakFast" + lastNum);
  if (!lastInput || lastInput.value !== "") {
    if (lastInput) {
      lastInput.removeEventListener("input", addInputForBreakfast);
    }
    debugger;
    let body = document.getElementById("Breakfast_inputs");
    let input = document.createElement("input");
    input.id = "inputForBreakFast" + numOfInputsForBreakfast;
    numOfInputsForBreakfast += 1;
    input.addEventListener("input", addInputForBreakfast);
    body.appendChild(input);
  }
}
//////////////////////////
numOfInputsForLunch = 0;
function addInputForLunch() {
  debugger;
  let lastNum=numOfInputsForLunch-1;
  let lastInput = document.getElementById("inputForLunch" + lastNum);
  if (!lastInput || lastInput.value !== "") {
    if (lastInput) {
      lastInput.removeEventListener("input", addInputForLunch);
    }
    debugger;
    let body = document.getElementById("Lunch_inputs");
    let input = document.createElement("input");
    input.id = "inputForLunch" + numOfInputsForLunch;
    numOfInputsForLunch += 1;
    input.addEventListener("input", addInputForLunch);
    body.appendChild(input);
  }
}
//////////////////////////
numOfInputsForDinner = 0;
function addInputForDinner() {
  debugger;
  let lastNum=numOfInputsForDinner-1;
  let lastInput = document.getElementById("inputForDinner" + lastNum);
  if (!lastInput || lastInput.value !== "") {
    if (lastInput) {
      lastInput.removeEventListener("input", addInputForDinner);
    }
    debugger;
    let body = document.getElementById("Dinner_inputs");
    let input = document.createElement("input");
    input.id = "inputForDinner" + numOfInputsForDinner;
    numOfInputsForDinner += 1;
    input.addEventListener("input", addInputForDinner);
    body.appendChild(input);
  }
}
//////////////////////////
numOfInputsForSnack = 0;
function addInputForSnack() {
  debugger;
  let lastNum=numOfInputsForSnack-1;
  let lastInput = document.getElementById("inputForSnack" + lastNum);
  if (!lastInput || lastInput.value !== "") {
    if (lastInput) {
      lastInput.removeEventListener("input", addInputForSnack);
    }
    debugger;
    let body = document.getElementById("IntermediateSnack_inputs");
    let input = document.createElement("input");
    input.id = "inputForSnack" + numOfInputsForSnack;
    numOfInputsForSnack += 1;
    input.addEventListener("input", addInputForSnack);
    body.appendChild(input);
  }
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   debugger;
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
function addDayToDiary() {
  debugger;
  const content_IntermediateSnack_inputs = document.getElementById("IntermediateSnack_inputs");
  content_IntermediateSnack_inputs.innerHTML = "";
  const content_Dinner_inputs = document.getElementById("Dinner_inputs");
  content_Dinner_inputs.innerHTML = "";
  const content_Lunch_inputs = document.getElementById("Lunch_inputs");
  content_Lunch_inputs.innerHTML = "";
  const content_Breakfast_inputs = document.getElementById("Breakfast_inputs");
  content_Breakfast_inputs.innerHTML = "";
  modal.style.display = "none";
}
