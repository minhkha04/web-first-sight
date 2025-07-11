function isValidInput(str) {
    if (str.length < 6) {
        return false;
    }
    let number = false;
    let upper = false;
    let lower = false;
    for(let c of str) {
        if (c === " ") {
            return false;
        } else if (c >= "A" && c <= "Z") {
            upper = true;
        } else if (c >= "a" && c <= "z") {
            lower = true;;
        } else if (c >= "0" && c <= "9") {
            number = true;
        }
    }
    return number && upper && lower;
}

function setPass() {
    let str = prompt("Input new pass: ");
    if(isValidInput(str)) {
        alert("Set Password success!!");
        return str;
    } else {
        alert(`Your Password must following:
            1. Dont contain white space
            2. Have at least 1 char uppercase
            3. Have at least 1 char lowercase
            4. Have at least 1 number
            5. Have more than 6 character`);
        setPass();
    }
}

let password = setPass();
let i = 0;
while(true) {
    if (i >= 5) {
        alert("Your account is blocked!!");
        break;
    }
    i++;
    let curPass = prompt("Input Password: ");
    if(curPass === password) {
        alert("Login success!");
    } else {
        alert("Worng! Try again" + i + "/5");
    }
}