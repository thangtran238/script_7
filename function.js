// var a = prompt("Input height:","0");
// var b = prompt ("Input width:","0");
// alert ("Your area rectangle is: " + (a*b));
function noi() {
  var x = (document.getElementById("user").value);
  var y = (document.getElementById("suser").value);
  document.getElementById("kq1").innerHTML = x+y;
}

function timso() {
  var number = document.getElementById("nhap").value;
  var greeting;
  if (number == 0) {
    greeting = "ban duoc 0 diem";

  } else if ( number > 0 ) {
    greeting = "Do la so duong";
  }
  else {
    greeting = "Day la so am";
  }
  document.getElementById("kq").innerHTML = greeting;
}
function grade(score,name) {
  var string_grade;
  if (score >=0 && score <= 100) {
    if (score > 90) {
      string_grade = "Exelence";
    }else if (score> 80) {
      string_grade = "Very Good";
    }else if (score > 60) {
      string_grade = "fair";
    } else if (score >= 50) {
      string_grade = "Medium";
    } else {
      string_grade = "Fail";
    }
  }
  else {
    string_grade = "Score must be between 0 and 100";
  }
  document.getElementById('str_grade').innerHTML = name + "'s grade is <b>" + string_grade + "</b>"
}