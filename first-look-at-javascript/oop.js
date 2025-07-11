let arr = [1, 2, 34, 2]
let Student = {
    name: "Minh Kha",
    yob: 2004,
    sorce: [9, 8, 10],
    getAge: function () {
        let curYear = (new Date()).getFullYear();
        return curYear - this.yob;
    },
    getTotal: function () {
        this.Avg = this.sorce.reduce((a, b) => { return a + b }, 0) / this.sorce.length;
        return this.Avg;
    },
}
console.log(Student.name);
console.log(Number(Student.getAge()));
Student.getTotal();
console.log(Student.Avg);
//Constructor
class Teacher {
    constructor(name, yob, sex) {
        this.name = name;
        this.yob = yob,
        this.sex = sex;
    }
    set newName(name) {
        this.name = name;
    }
    get getAgeV2() {
        return 2024 - this.yob;        
    }
    infor() {
        return `Name: ${this.name}
Yob: ${this.yob}
Sex: ${this.sex}
Age: ${this.getAgeV2}`
    }
}
let t1 = new Teacher("Kha", 2004, "M");
console.log(t1.name);
t1.newName = "khanew";
console.log(t1.name);
console.log(t1.infor());
