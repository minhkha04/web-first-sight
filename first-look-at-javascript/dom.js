function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const min = now.getMinutes();
    const seconds = now.getSeconds();
    const prefixHours = hours >= 10 ? "" : "0";
    const prefixMin = min >= 10 ? "" : "0";
    const prefixSeconds = seconds >= 10 ? "" : "0";

    document.getElementById("clock").innerHTML = `${prefixHours}${hours}:${prefixMin}${min}:${prefixSeconds}${seconds}`;
}

let color = ["linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
    "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)",
    "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
    "linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)",
    "linear-gradient(to top, #09203f 0%, #537895 100%)",
    "linear-gradient(to top, #c71d6f 0%, #d09693 100%)",
    "linear-gradient(to top, #209cff 0%, #68e0cf 100%)",
    "linear-gradient(to top, #cc208e 0%, #6713d2 100%)",
];
function changeTextColor() {
    let clock = document.getElementById("clock");
    let index = Math.floor(Math.random() * 10);
    clock.style.backgroundImage = color[index];
    clock.style.textAlign = "center";
}
setInterval(getTime, 1000);
setInterval(changeTextColor, 1000);

class Student {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    show() {
        return `Name: ${this.name} Age: ${this.age} Sex: ${this.sex}`
    }
}
const btn = document.getElementById("btn");
const name = document.getElementById("name");
const age = document.getElementById("age");
const sex = document.getElementById("sex");
const show = document.getElementById("show");
const btn2 = document.getElementById("btn2");
let array = [];
function getInfor() {
    array.push(new Student(name.value, age.value, sex.value));
    name.value = "";
    age.value = "";
    sex.value = "";

}
function showfu() {
    show.innerHTML = "";
    array.forEach(function (student) {
        show.innerHTML += student.show() + "<br>";
    });
}
btn.addEventListener('click', getInfor)
btn2.addEventListener('click', showfu)

/*
textContent lấy nội dung
innerText: lấy nội dung nhìn thấy được
innerHTML: lấy nội dung + thẻ
*/

let now =  new Date(0);
console.log(now);