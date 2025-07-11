class Student {
  id = "";
  name = "";
  email = "";
  password = "";
  brithday = "";
  coursera = "";
  math = "";
  physics = "";
  chemistry = "";
  avg = function () {
    let math = this.math * 1;
    let physics = this.physics * 1;
    let chemistry = this.chemistry * 1;
    return ((math + physics + chemistry) / 3 ).toFixed(2);
  };
}
