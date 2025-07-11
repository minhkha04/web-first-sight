//------------------------------------
// let arrNum = [21, 45, 33];
// let arrNumJON = JSON.stringify(arrNum); // convert to JSON
// localStorage.setItem("arrNum", arrNumJON); // storage
// let test = localStorage.getItem("arrNum"); // get
// let newData = JSON.parse("arrNum") // convert JSON to ...
// localStorage.removeItem("arrNum"); // delete

// phép toán nhị phân
// true & false = 1 & 0 = 0 false
// true & true = 1 & 1 = 1 true
//--------------------------------------

let formQLSV = document.getElementById("formQLSV");
let arrStudent = getLocalStorage();
renderArrStudent();
formQLSV.onsubmit = function (event) {
  event.preventDefault();
  let student = getValueStudent();
  if (!student) {
    return;
  }
  arrStudent.push(student);
  formQLSV.reset();
  renderArrStudent();
  saveLocalStorage();
  showToast("Add new student success", 3000, "bg-success");
};

function renderArrStudent(arr = arrStudent) {
  let content = ``;
  for (let student of arr) {
    let newStudent = new Student();

    Object.assign(newStudent, student);
    //destructuring
    let { id, name, email, brithday, coursera } = newStudent;
    let avgScore = newStudent.avg();
    content += `
        <tr>
            <td class="p-0" style="line-height: 54.5px;">${id}</td>
            <td class="p-0" style="line-height: 54.5px;">${name}</td>
            <td class="p-0" style="line-height: 54.5px;">${email}</td>
            <td class="p-0" style="line-height: 54.5px;">${brithday}</td>
            <td class="p-0" style="line-height: 54.5px;">${coursera}</td>
            <td class="p-0" style="line-height: 54.5px;">${avgScore}</td>
            <td>
              <button onclick = "deleteStudent('${id}')" class="btn btn-danger"> DELETE </button>
              <button onclick = "getInfoStudent('${id}')" class="btn btn-warning"> EDIT </button>
            </td>
        </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = content;
}
document.getElementById("btnReset").onclick = () => {
  formQLSV.reset();
  document.getElementById("id").disabled = false;
  let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select");
  for (const field of arrField) {
    let parentTag = field.parentElement;
    parentTag.querySelector("span").innerHTML = "";
  }
};

function saveLocalStorage(key = "arrStudent", value = arrStudent) {
  let stringJson = JSON.stringify(value);
  localStorage.setItem(key, stringJson);
}

function getLocalStorage(key = "arrStudent") {
  let dataLocal = localStorage.getItem(key);
  let newDataLocal = JSON.parse(dataLocal);
  return newDataLocal ? newDataLocal : [];
}
function deleteStudent(idDelete) {
  let index = getIndex(idDelete);
  if (index != -1) {
    arrStudent.splice(index, 1);
    renderArrStudent();
    saveLocalStorage();
    showToast("Delete student success", 3000, "bg-danger");
  }
}

function getInfoStudent(id) {
  let index = getIndex(id);
  let student = arrStudent[index];
  console.log(student);
  let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select");
  for (const item of arrField) {
    let { id } = item;
    item.value = student[id];
  }
  document.getElementById("id").disabled = true;
}

document.getElementById("btnUpdate").onclick = () => {
  let student = getValueStudent();
  let index = getIndex(student.id);
  arrStudent[index] = student;
  saveLocalStorage();
  renderArrStudent();
  showToast("Update student success", 3000, "bg-warning");
  formQLSV.reset();
  document.getElementById("id").disabled = false;
};

function getValueStudent() {
  let student = new Student();
  let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select");
  let isValid = true;
  for (const field of arrField) {
    let { value, id } = field;
    let dataValidation = field.getAttribute("data-validation");
    console.log(dataValidation);
    student[id] = value;
    let parentTag = field.parentElement;
    let spanNotification = parentTag.querySelector("span");
    let isNotEmty = checkEmptyValue(value, spanNotification);
    isValid &= isNotEmty;
    if (!isNotEmty) {
      continue;
    }
    // if (id == "name") {
    //   isValid &= checkMinMaxValue(value, spanNotification, 6, 10);
    // }
    // if (id == "email") {
    //   isValid &= checkEmail(value, spanNotification);
    // }
    switch (dataValidation) {
      case "lenghtName":
        isValid &= checkMinMaxValue(value, spanNotification, 6, 10);
        break;
      case "email":
        isValid &= checkEmail(value, spanNotification);
        break;
    }
  }
  if (!isValid) {
    return;
  }
  return student;
}

function getIndex(idFind) {
  return arrStudent.findIndex((item, index) => {
    return item.id == idFind;
  });
}

function showToast(text, duration, className) {
  Toastify({
    text,
    duration,
    className,
    // destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      // background: "linear-gradient(to right, #00b09b, #96c93d)",
      background: "red",
    },
    // onClick: function () {}, // Callback after click
    // backgroundColor: "red",
  }).showToast();
}

document.getElementById("search").oninput = (envent) => {
  let valueFind = removeVietnameseTones(envent.target.value)
    .trim()
    .toLowerCase();
  let arrFilter = arrStudent.filter((item, index) => {
    let name = removeVietnameseTones(item.name).trim().toLowerCase();
    return name.includes(valueFind);
  });
  renderArrStudent(arrFilter);
};
