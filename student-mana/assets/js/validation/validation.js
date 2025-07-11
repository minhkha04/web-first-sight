function checkEmptyValue(value, span) {
  if (value) {
    span.innerHTML = "";
    return true;
  }
  span.innerHTML = "Not empty!!!";
  return false;
}

function checkMinMaxValue(value, span, minLenght, maxLenght) {
  let lenght = value.length;
  if (lenght > minLenght && length < maxLenght) {
    span.innerHTML = "";
    return true;
  }
  span.innerHTML = `Plaese enter a minimum of ${minLenght} characters and maximum ${maxLenght} characters`;
  return false;
}

function checkEmail(value, span) {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let isValid = regex.test(value);
  if (isValid) {
    span.innerHTML = "";
    return true;
  }
  span.innerHTML = `Plaese enter the correct email format`;
  return false;
}
