
function calculator() {
    const output = document.getElementById("output");
    const scorce = document.getElementById("scorce").value * 1;
    const scorce1 = document.getElementById("scorce1").value * 1;
    const scorce2 = document.getElementById("scorce2").value * 1;
    const scorce3 = document.getElementById("scorce3").value * 1;
    const arrayScorce = [scorce1, scorce3, scorce2];
    const area = document.getElementById("area").value;
    const object = document.getElementById("object").value;
    let getScorceArea = function () {
        switch (area) {
            case "A":
                return 2;
            case "B":
                return 1;
            case "C":
                return 0.5;
            default:
                return 0;
        };
    }
    let getScorceObject = function () {
        switch (object) {
            case "1":
                return 2.5;
            case "2":
                return 1.5;
            case "3":
                return 1;
            default:
                return 0;
        };
    }
    let total = scorce1 + scorce2 + scorce3 + getScorceArea() + getScorceObject();
    let checkPass = function () {
        if (arrayScorce.includes(0)) return "Failed";
        if (total >= scorce) {
            return "Pass";
        }
        return "Failed";
    }
    output.innerHTML = `<p>Your scorce: ${total}<\p><p>Result: ${checkPass()}<\p>`;
}
function calculatorElectric() {
    const outputE = document.getElementById("outputE");
    const name = document.getElementById("name").value;
    let value = document.getElementById("value").value * 1;
    let total = 0;
    if (value <= 50) {
        total = value * 500;
    } else {
        total = 50 * 500;
        value = value - 50;
        if (value <= 50) {
            total += value * 650;
        } else {
            total += 50 * 650;
            value = value - 50;
            if (value <= 100) {
                total += value * 850;
            } else {
                total += 100 * 850;
                value = value - 100;
                if (value <= 150) {
                    total += value * 1100;
                } else {
                    total += 150 * 1100;
                    value = value - 150;
                    total += value * 1300;
                }
            }
        }
    }
    outputE.innerHTML = `<p>Name: ${name}<\p><p>Total: ${total.toLocaleString('de-DE')} DONG<\p>`;
}

class People {
    constructor(name, salary, depence) {
        this.name = name;
        this.salary = salary;
        this.depence = depence;
    }

    get tax() {
        let total = this.salary - 4000000 - this.depence * 1600000;
        if (total <= 60000000) {
            return 5;
        }
        if (total > 60000000 && total <= 120000000) {
            return 10;
        }
        if (total > 120000000 && total <= 210000000) {
            return 15;
        }
        if (total > 210000000 && total <= 384000000) {
            return 20;
        }
        if (total > 384000000 && total <= 624000000) {
            return 25;
        }
        if (total > 624000000 && total <= 960000000) {
            return 30;
        }
        return 35;
    }
}
function getPrecent() {
    const name = document.getElementById("name2").value;
    const salary = document.getElementById("salary").value * 1;
    const depence = document.getElementById("depence").value * 1;
    const outputTax = document.getElementById("outputTax");

    let p = new People(name, salary, depence);
    outputTax.innerHTML = `<p>${p.tax}<\p>`;
}

document.getElementById("electric").addEventListener('click', calculatorElectric);
document.getElementById("btn").addEventListener('click', calculator);
document.getElementById("btn3").addEventListener('click', getPrecent);
