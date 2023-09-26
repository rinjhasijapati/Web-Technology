var regExp= /^([a-zA-Z0-9._-]+)@([a-z0-9]+\.)+([a-z]+)$/;
var regExp1= /^([a-zA-Z0-9._-]+)@([a-z0-9]+\.)+([a-z]+)$/;
var regExp2= /^([a-zA-Z0-9._-]+)@([a-z0-9]+\.)+([a-z]+)$/;



function check() {
    var email = document.getElementById("f1").value;
    if(regExp.test(email)) {
        alert("Valid Email");
    } else {
        alert("Input valid email");
    }
}
