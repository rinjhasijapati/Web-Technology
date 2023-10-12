var regExp= /^[a-zA-Z0-9._-]+@[a-z0-9]+\.+[a-z]+$/;
var regExp1= /^[a-zA-Z0-9\._-]+$/;
var regExp2= /^[0-9]+$/;



function check() {
    var email = document.getElementById("f1").value;
    var name = document.getElementById("f2").value;
    var number = document.getElementById("f3").value;

    if(regExp.test(email)) {
        alert("Valid Email");
    } else {
        alert("Input valid email");
    }

    if(regExp1.test(name)) {
        alert("Valid Username");
    } else {
        alert("Input valid Username");
    }

    if(regExp.test(number)) {
        alert("Valid Phone No");
    } else {
        alert("Input valid Phone No");
    }
}
