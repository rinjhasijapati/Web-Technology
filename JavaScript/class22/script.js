/* 
    * = 0 or more
    + = 1 or more
    ? = 0 or 1
*/

var regExp = /^([a-z A-Z 0-9\._-]+@[a-z0-9]+)([a-z])+$/;
var regExp1 = /^([a-z A-Z 0-9\._-]+)$/;
var regExp2 = /^([a-zA-Z0-9\._-! @ # $ ^ % & *]+)$/;

function check() {
    var email = document.getElementById('f1').value;
    var username = document.getElementById('f2').value;
    var password = document.getElementById('f3').value;

    if (regExp.test(email)) {
        alert("Valid Email");
    } else {
        alert("Input valid Email");
    }

    if (regExp1.test(username)) {
        alert("Valid Username");
    } else {
        alert("Input valid Username");
    }

    if (regExp2.test(password)) {
        alert("Valid Password");
    } else {
        alert("Input valid password");
    }
}



