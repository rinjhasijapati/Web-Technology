function addition() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    a = parseInt(a);
    b = parseInt(b);
    var sum = a + b;
    document.getElementById("sum").value = sum;
    document.getElementById("para").innerHTML = sum;
}

function subtraction() {
    var c = document.getElementById("firstS").value;
    var d = document.getElementById("secondS").value;
    c = parseInt(c);
    d = parseInt(d);
    var difference = c - d;
    document.getElementById("Difference").value = difference;
}

function multiply() {
    var e = document.getElementById("firstM").value;
    var f = document.getElementById("secondM").value;
    e = parseInt(e);
    f = parseInt(f);
    var product = e * f;
    document.getElementById("Multiply").value = product;
}

function modulus() {
    var g = document.getElementById("firstD").value;
    var h = document.getElementById("secondD").value;
    g = parseInt(g);
    h = parseInt(h);
    var modulus = g%h;
    document.getElementById("Modulus").value = modulus;
}
