/* 
    * = 0 or more
    + = 1 or more
    ? = 0 or 1
*/

var regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$()_+])[A-Za-z\d!@#$()_+]{8,}$/;

function check() {
    var email = document.getElementById('f1').value;

    if (regExp.test(email)) {
        alert("Valid Email");
    } else {
        alert("Input valid Email");
    }
}



